from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import androidinstrumentationtest
from . import androidrobotest
from . import androidtestloop
from . import iostestloop
from . import iostestsetup
from . import iosxctest
from . import testsetup


@dataclass_json
@dataclass
class TestSpecification:
    android_instrumentation_test: Optional[androidinstrumentationtest.AndroidInstrumentationTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidInstrumentationTest' }})
    android_robo_test: Optional[androidrobotest.AndroidRoboTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidRoboTest' }})
    android_test_loop: Optional[androidtestloop.AndroidTestLoop] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidTestLoop' }})
    disable_performance_metrics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disablePerformanceMetrics' }})
    disable_video_recording: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableVideoRecording' }})
    ios_test_loop: Optional[iostestloop.IosTestLoop] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosTestLoop' }})
    ios_test_setup: Optional[iostestsetup.IosTestSetup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosTestSetup' }})
    ios_xc_test: Optional[iosxctest.IosXcTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosXcTest' }})
    test_setup: Optional[testsetup.TestSetup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSetup' }})
    test_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTimeout' }})
    
