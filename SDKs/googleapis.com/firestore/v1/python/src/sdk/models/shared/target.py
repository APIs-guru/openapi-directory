from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentstarget
from . import querytarget


@dataclass_json
@dataclass
class Target:
    documents: Optional[documentstarget.DocumentsTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    once: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'once' }})
    query: Optional[querytarget.QueryTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumeToken' }})
    target_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    
