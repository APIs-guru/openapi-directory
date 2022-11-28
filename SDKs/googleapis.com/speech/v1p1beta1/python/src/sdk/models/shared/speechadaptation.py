from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpeechAdaptation:
    r"""SpeechAdaptation
    Speech adaptation configuration.
    """
    
    custom_classes: Optional[List[CustomClass]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClasses') }})
    phrase_set_references: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSetReferences') }})
    phrase_sets: Optional[List[PhraseSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSets') }})
    
