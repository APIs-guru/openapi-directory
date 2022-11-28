from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig:
    r"""GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig
    Config for EXPLICIT_CONTENT_DETECTION.
    """
    
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
