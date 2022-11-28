from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidTest:
    r"""AndroidTest
    An Android mobile test specification.
    """
    
    android_app_info: Optional[AndroidAppInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppInfo') }})
    android_instrumentation_test: Optional[AndroidInstrumentationTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInstrumentationTest') }})
    android_robo_test: Optional[AndroidRoboTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidRoboTest') }})
    android_test_loop: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidTestLoop') }})
    test_timeout: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTimeout') }})
    
