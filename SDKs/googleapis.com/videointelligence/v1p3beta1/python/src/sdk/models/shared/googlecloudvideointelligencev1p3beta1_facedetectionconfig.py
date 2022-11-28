from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig:
    r"""GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig
    Config for FACE_DETECTION.
    """
    
    include_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAttributes') }})
    include_bounding_boxes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeBoundingBoxes') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
