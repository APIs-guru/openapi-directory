from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextProperty:
    r"""TextProperty
    Additional information detected on the structural component.
    """
    
    detected_break: Optional[DetectedBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBreak') }})
    detected_languages: Optional[List[DetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    
