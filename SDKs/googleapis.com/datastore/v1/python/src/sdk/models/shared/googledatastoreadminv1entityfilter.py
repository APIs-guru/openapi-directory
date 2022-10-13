from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1EntityFilter:
    kinds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kinds' }})
    namespace_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceIds' }})
    
