from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AndroidInfo:
    r"""AndroidInfo
    Android related attributes to the Dynamic Link.
    """
    
    android_fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidFallbackLink') }})
    android_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidLink') }})
    android_min_package_version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidMinPackageVersionCode') }})
    android_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidPackageName') }})
    
