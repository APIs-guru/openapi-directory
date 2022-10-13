from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configmanagementerrorresource


@dataclass_json
@dataclass
class ConfigManagementSyncError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    error_resources: Optional[List[configmanagementerrorresource.ConfigManagementErrorResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorResources' }})
    
