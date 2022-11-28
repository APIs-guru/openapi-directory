from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig:
    r"""GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig
    Config for OBJECT_TRACKING.
    """
    
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
