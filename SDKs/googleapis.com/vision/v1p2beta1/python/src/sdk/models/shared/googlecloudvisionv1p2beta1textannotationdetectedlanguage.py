from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage:
    r"""GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage
    Detected language for a structural component.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    
