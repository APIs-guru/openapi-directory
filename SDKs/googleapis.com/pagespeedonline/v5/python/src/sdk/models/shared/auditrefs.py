from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditRefs:
    acronym: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acronym' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    relevant_audits: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevantAudits' }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
