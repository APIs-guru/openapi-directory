from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IosXcTest:
    r"""IosXcTest
    A test of an iOS application that uses the XCTest framework. Xcode supports the option to \"build for testing\", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
    """
    
    app_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundleId') }})
    test_special_entitlements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSpecialEntitlements') }})
    tests_zip: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testsZip') }})
    xcode_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xcodeVersion') }})
    xctestrun: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xctestrun') }})
    
