from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inventorysoftwarepackage
from . import inventorysoftwarepackage

class InventoryItemOriginTypeEnum(str, Enum):
    ORIGIN_TYPE_UNSPECIFIED = "ORIGIN_TYPE_UNSPECIFIED"
    INVENTORY_REPORT = "INVENTORY_REPORT"

class InventoryItemTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    INSTALLED_PACKAGE = "INSTALLED_PACKAGE"
    AVAILABLE_PACKAGE = "AVAILABLE_PACKAGE"


@dataclass_json
@dataclass
class InventoryItem:
    available_package: Optional[inventorysoftwarepackage.InventorySoftwarePackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availablePackage' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    installed_package: Optional[inventorysoftwarepackage.InventorySoftwarePackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installedPackage' }})
    origin_type: Optional[InventoryItemOriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originType' }})
    type: Optional[InventoryItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
