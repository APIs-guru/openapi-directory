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
class SoftwarePackage:
    r"""SoftwarePackage
    Software package information of the operating system.
    """
    
    apt_package: Optional[VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aptPackage') }})
    cos_package: Optional[VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosPackage') }})
    googet_package: Optional[VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googetPackage') }})
    qfe_package: Optional[WindowsQuickFixEngineeringPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qfePackage') }})
    windows_application: Optional[WindowsApplication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsApplication') }})
    wua_package: Optional[WindowsUpdatePackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wuaPackage') }})
    yum_package: Optional[VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yumPackage') }})
    zypper_package: Optional[VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypperPackage') }})
    zypper_patch: Optional[ZypperPatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypperPatch') }})
    
