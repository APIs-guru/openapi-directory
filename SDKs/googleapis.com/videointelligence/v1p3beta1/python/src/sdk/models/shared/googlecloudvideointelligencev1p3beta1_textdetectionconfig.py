from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig:
    r"""GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig
    Config for TEXT_DETECTION.
    """
    
    language_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageHints') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
