from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IosTest:
    r"""IosTest
    A iOS mobile test specification
    """
    
    ios_app_info: Optional[IosAppInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppInfo') }})
    ios_robo_test: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosRoboTest') }})
    ios_test_loop: Optional[IosTestLoop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTestLoop') }})
    ios_xc_test: Optional[IosXcTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosXcTest') }})
    test_timeout: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTimeout') }})
    
