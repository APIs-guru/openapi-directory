from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vmwarevmsdetails


@dataclass_json
@dataclass
class FetchInventoryResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    vmware_vms: Optional[vmwarevmsdetails.VmwareVmsDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmwareVms' }})
    
