from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1TextAnnotationTextProperty:
    r"""GoogleCloudVisionV1p2beta1TextAnnotationTextProperty
    Additional information detected on the structural component.
    """
    
    detected_break: Optional[GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBreak') }})
    detected_languages: Optional[List[GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    
