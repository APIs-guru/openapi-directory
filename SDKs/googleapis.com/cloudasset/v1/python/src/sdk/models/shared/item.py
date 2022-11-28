from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemOriginTypeEnum(str, Enum):
    ORIGIN_TYPE_UNSPECIFIED = "ORIGIN_TYPE_UNSPECIFIED"
    INVENTORY_REPORT = "INVENTORY_REPORT"

class ItemTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    INSTALLED_PACKAGE = "INSTALLED_PACKAGE"
    AVAILABLE_PACKAGE = "AVAILABLE_PACKAGE"


@dataclass_json
@dataclass
class Item:
    r"""Item
    A single piece of inventory on a VM.
    """
    
    available_package: Optional[SoftwarePackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availablePackage') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    installed_package: Optional[SoftwarePackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedPackage') }})
    origin_type: Optional[ItemOriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originType') }})
    type: Optional[ItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
