from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import androidappinfo
from . import androidinstrumentationtest
from . import androidrobotest
from . import duration


@dataclass_json
@dataclass
class AndroidTest:
    android_app_info: Optional[androidappinfo.AndroidAppInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidAppInfo' }})
    android_instrumentation_test: Optional[androidinstrumentationtest.AndroidInstrumentationTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidInstrumentationTest' }})
    android_robo_test: Optional[androidrobotest.AndroidRoboTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidRoboTest' }})
    android_test_loop: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidTestLoop' }})
    test_timeout: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTimeout' }})
    
