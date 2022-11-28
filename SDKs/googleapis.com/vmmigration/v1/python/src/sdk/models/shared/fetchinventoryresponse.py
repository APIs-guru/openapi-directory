from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FetchInventoryResponse:
    r"""FetchInventoryResponse
    Response message for fetchInventory.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vmware_vms: Optional[VmwareVmsDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmwareVms') }})
    
