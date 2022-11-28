from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApkManifest:
    r"""ApkManifest
    An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
    """
    
    application_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationLabel') }})
    intent_filters: Optional[List[IntentFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentFilters') }})
    max_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSdkVersion') }})
    metadata: Optional[List[Metadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    min_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSdkVersion') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    target_sdk_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSdkVersion') }})
    uses_feature: Optional[List[UsesFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesFeature') }})
    uses_permission: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesPermission') }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionName') }})
    
