from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1BoundingPolyConfig:
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSet' }})
    instruction_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructionMessage' }})
    
