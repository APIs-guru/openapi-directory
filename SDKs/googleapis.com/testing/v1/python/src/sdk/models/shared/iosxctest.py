from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filereference
from . import filereference


@dataclass_json
@dataclass
class IosXcTest:
    app_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appBundleId' }})
    test_special_entitlements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSpecialEntitlements' }})
    tests_zip: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testsZip' }})
    xcode_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xcodeVersion' }})
    xctestrun: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xctestrun' }})
    
