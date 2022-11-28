from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum(str, Enum):
    OS_UNSPECIFIED = "OS_UNSPECIFIED"
    DESKTOP_MAC = "DESKTOP_MAC"
    DESKTOP_WINDOWS = "DESKTOP_WINDOWS"
    DESKTOP_LINUX = "DESKTOP_LINUX"
    DESKTOP_CHROME_OS = "DESKTOP_CHROME_OS"
    ANDROID = "ANDROID"
    IOS = "IOS"


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1OsConstraint:
    r"""GoogleIdentityAccesscontextmanagerV1OsConstraint
    A restriction on the OS type and version of devices making requests.
    """
    
    minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumVersion') }})
    os_type: Optional[GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osType') }})
    require_verified_chrome_os: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireVerifiedChromeOs') }})
    
