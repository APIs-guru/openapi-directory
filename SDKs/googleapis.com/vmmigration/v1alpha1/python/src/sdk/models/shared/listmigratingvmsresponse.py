from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import migratingvm


@dataclass_json
@dataclass
class ListMigratingVmsResponse:
    migrating_vms: Optional[List[migratingvm.MigratingVM]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migratingVms' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
