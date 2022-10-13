from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PartitionID:
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseId' }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    
