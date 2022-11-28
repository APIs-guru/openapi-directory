from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IosXcTest:
    r"""IosXcTest
    A test of an iOS application that uses the XCTest framework.
    """
    
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    xcode_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xcodeVersion') }})
    
