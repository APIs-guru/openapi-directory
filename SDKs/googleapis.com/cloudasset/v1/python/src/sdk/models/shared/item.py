from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import softwarepackage
from . import softwarepackage

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
    available_package: Optional[softwarepackage.SoftwarePackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availablePackage' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    installed_package: Optional[softwarepackage.SoftwarePackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installedPackage' }})
    origin_type: Optional[ItemOriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originType' }})
    type: Optional[ItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
