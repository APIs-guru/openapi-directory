from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventoryversionedpackage
from . import inventoryversionedpackage
from . import inventoryversionedpackage
from . import inventorywindowsquickfixengineeringpackage
from . import inventorywindowsapplication
from . import inventorywindowsupdatepackage
from . import inventoryversionedpackage
from . import inventoryversionedpackage
from . import inventoryzypperpatch


@dataclass_json
@dataclass
class InventorySoftwarePackage:
    apt_package: Optional[inventoryversionedpackage.InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aptPackage' }})
    cos_package: Optional[inventoryversionedpackage.InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cosPackage' }})
    googet_package: Optional[inventoryversionedpackage.InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googetPackage' }})
    qfe_package: Optional[inventorywindowsquickfixengineeringpackage.InventoryWindowsQuickFixEngineeringPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qfePackage' }})
    windows_application: Optional[inventorywindowsapplication.InventoryWindowsApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsApplication' }})
    wua_package: Optional[inventorywindowsupdatepackage.InventoryWindowsUpdatePackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wuaPackage' }})
    yum_package: Optional[inventoryversionedpackage.InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yumPackage' }})
    zypper_package: Optional[inventoryversionedpackage.InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypperPackage' }})
    zypper_patch: Optional[inventoryzypperpatch.InventoryZypperPatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypperPatch' }})
    
