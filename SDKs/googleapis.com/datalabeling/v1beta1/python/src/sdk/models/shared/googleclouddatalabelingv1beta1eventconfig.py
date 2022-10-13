from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EventConfig:
    annotation_spec_sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSets' }})
    clip_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clipLength' }})
    overlap_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overlapLength' }})
    
