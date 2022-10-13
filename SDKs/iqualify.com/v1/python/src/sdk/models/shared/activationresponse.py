from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivationResponseMetadata:
    root_content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootContentId' }})
    

@dataclass_json
@dataclass
class ActivationResponse:
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    learners_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnersCount' }})
    metadata: Optional[ActivationResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
