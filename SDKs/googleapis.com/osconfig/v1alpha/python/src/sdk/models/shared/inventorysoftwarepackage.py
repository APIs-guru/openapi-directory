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
class InventorySoftwarePackage:
    r"""InventorySoftwarePackage
    Software package information of the operating system.
    """
    
    apt_package: Optional[InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aptPackage') }})
    cos_package: Optional[InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosPackage') }})
    googet_package: Optional[InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googetPackage') }})
    qfe_package: Optional[InventoryWindowsQuickFixEngineeringPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qfePackage') }})
    windows_application: Optional[InventoryWindowsApplication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsApplication') }})
    wua_package: Optional[InventoryWindowsUpdatePackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wuaPackage') }})
    yum_package: Optional[InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yumPackage') }})
    zypper_package: Optional[InventoryVersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypperPackage') }})
    zypper_patch: Optional[InventoryZypperPatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypperPatch') }})
    
