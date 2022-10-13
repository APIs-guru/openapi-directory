from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig:
    include_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeAttributes' }})
    include_bounding_boxes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeBoundingBoxes' }})
    include_pose_landmarks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includePoseLandmarks' }})
    
