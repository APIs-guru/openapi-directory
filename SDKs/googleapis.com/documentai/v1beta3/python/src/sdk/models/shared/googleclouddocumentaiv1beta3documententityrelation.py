from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentEntityRelation:
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relation' }})
    subject_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectId' }})
    
