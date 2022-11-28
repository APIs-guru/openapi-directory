from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectLanguageResponse:
    r"""DetectLanguageResponse
    The response message for language detection.
    """
    
    languages: Optional[List[DetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
