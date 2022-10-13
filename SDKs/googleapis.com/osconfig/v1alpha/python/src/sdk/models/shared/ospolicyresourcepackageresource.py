from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcepackageresourceapt
from . import ospolicyresourcepackageresourcedeb
from . import ospolicyresourcepackageresourcegooget
from . import ospolicyresourcepackageresourcemsi
from . import ospolicyresourcepackageresourcerpm
from . import ospolicyresourcepackageresourceyum
from . import ospolicyresourcepackageresourcezypper

class OsPolicyResourcePackageResourceDesiredStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclass
class OsPolicyResourcePackageResource:
    apt: Optional[ospolicyresourcepackageresourceapt.OsPolicyResourcePackageResourceApt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apt' }})
    deb: Optional[ospolicyresourcepackageresourcedeb.OsPolicyResourcePackageResourceDeb] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deb' }})
    desired_state: Optional[OsPolicyResourcePackageResourceDesiredStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredState' }})
    googet: Optional[ospolicyresourcepackageresourcegooget.OsPolicyResourcePackageResourceGooGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googet' }})
    msi: Optional[ospolicyresourcepackageresourcemsi.OsPolicyResourcePackageResourceMsi] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msi' }})
    rpm: Optional[ospolicyresourcepackageresourcerpm.OsPolicyResourcePackageResourceRpm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rpm' }})
    yum: Optional[ospolicyresourcepackageresourceyum.OsPolicyResourcePackageResourceYum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yum' }})
    zypper: Optional[ospolicyresourcepackageresourcezypper.OsPolicyResourcePackageResourceZypper] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypper' }})
    
