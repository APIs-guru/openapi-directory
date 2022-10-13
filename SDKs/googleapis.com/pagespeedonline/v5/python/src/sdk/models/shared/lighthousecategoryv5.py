from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import auditrefs


@dataclass_json
@dataclass
class LighthouseCategoryV5:
    audit_refs: Optional[List[auditrefs.AuditRefs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditRefs' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    manual_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualDescription' }})
    score: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
