from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import iosappinfo
from . import iostestloop
from . import iosxctest
from . import duration


@dataclass_json
@dataclass
class IosTest:
    ios_app_info: Optional[iosappinfo.IosAppInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosAppInfo' }})
    ios_robo_test: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosRoboTest' }})
    ios_test_loop: Optional[iostestloop.IosTestLoop] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosTestLoop' }})
    ios_xc_test: Optional[iosxctest.IosXcTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosXcTest' }})
    test_timeout: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTimeout' }})
    
