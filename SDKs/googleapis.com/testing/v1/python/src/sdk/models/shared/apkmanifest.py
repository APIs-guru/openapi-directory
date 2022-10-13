from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import intentfilter


@dataclass_json
@dataclass
class ApkManifest:
    application_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationLabel' }})
    intent_filters: Optional[List[intentfilter.IntentFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentFilters' }})
    max_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSdkVersion' }})
    min_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSdkVersion' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    target_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSdkVersion' }})
    uses_permission: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usesPermission' }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionName' }})
    
