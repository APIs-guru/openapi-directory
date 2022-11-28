from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpeechRecognitionAlternative:
    r"""SpeechRecognitionAlternative
    Alternative hypotheses (a.k.a. n-best list).
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    words: Optional[List[WordInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
