from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IosInfo:
    r"""IosInfo
    iOS related attributes to the Dynamic Link..
    """
    
    ios_app_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppStoreId') }})
    ios_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosBundleId') }})
    ios_custom_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosCustomScheme') }})
    ios_fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosFallbackLink') }})
    ios_ipad_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosIpadBundleId') }})
    ios_ipad_fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosIpadFallbackLink') }})
    ios_minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosMinimumVersion') }})
    
