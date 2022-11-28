from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestSpecification:
    r"""TestSpecification
    A description of how to run the test.
    """
    
    android_instrumentation_test: Optional[AndroidInstrumentationTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInstrumentationTest') }})
    android_robo_test: Optional[AndroidRoboTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidRoboTest') }})
    android_test_loop: Optional[AndroidTestLoop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidTestLoop') }})
    disable_performance_metrics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disablePerformanceMetrics') }})
    disable_video_recording: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableVideoRecording') }})
    ios_test_loop: Optional[IosTestLoop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTestLoop') }})
    ios_test_setup: Optional[IosTestSetup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTestSetup') }})
    ios_xc_test: Optional[IosXcTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosXcTest') }})
    test_setup: Optional[TestSetup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSetup') }})
    test_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTimeout') }})
    
