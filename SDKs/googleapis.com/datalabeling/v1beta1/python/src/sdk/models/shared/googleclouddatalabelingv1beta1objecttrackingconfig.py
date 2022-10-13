from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ObjectTrackingConfig:
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSet' }})
    clip_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clipLength' }})
    overlap_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overlapLength' }})
    
