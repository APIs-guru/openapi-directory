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
class Inventory:
    r"""Inventory
    This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
    """
    
    items: Optional[dict[str, Item]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_info: Optional[OsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osInfo') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
