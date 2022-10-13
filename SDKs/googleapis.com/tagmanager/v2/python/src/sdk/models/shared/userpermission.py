from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountaccess
from . import containeraccess


@dataclass_json
@dataclass
class UserPermission:
    account_access: Optional[accountaccess.AccountAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountAccess' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    container_access: Optional[List[containeraccess.ContainerAccess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerAccess' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
