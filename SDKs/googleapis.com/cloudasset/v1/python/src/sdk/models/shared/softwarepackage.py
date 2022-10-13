from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import versionedpackage
from . import versionedpackage
from . import versionedpackage
from . import windowsquickfixengineeringpackage
from . import windowsapplication
from . import windowsupdatepackage
from . import versionedpackage
from . import versionedpackage
from . import zypperpatch


@dataclass_json
@dataclass
class SoftwarePackage:
    apt_package: Optional[versionedpackage.VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aptPackage' }})
    cos_package: Optional[versionedpackage.VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cosPackage' }})
    googet_package: Optional[versionedpackage.VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googetPackage' }})
    qfe_package: Optional[windowsquickfixengineeringpackage.WindowsQuickFixEngineeringPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qfePackage' }})
    windows_application: Optional[windowsapplication.WindowsApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsApplication' }})
    wua_package: Optional[windowsupdatepackage.WindowsUpdatePackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wuaPackage' }})
    yum_package: Optional[versionedpackage.VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yumPackage' }})
    zypper_package: Optional[versionedpackage.VersionedPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypperPackage' }})
    zypper_patch: Optional[zypperpatch.ZypperPatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypperPatch' }})
    
