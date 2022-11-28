from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AndroidInstrumentationTestOrchestratorOptionEnum(str, Enum):
    ORCHESTRATOR_OPTION_UNSPECIFIED = "ORCHESTRATOR_OPTION_UNSPECIFIED"
    USE_ORCHESTRATOR = "USE_ORCHESTRATOR"
    DO_NOT_USE_ORCHESTRATOR = "DO_NOT_USE_ORCHESTRATOR"


@dataclass_json
@dataclass
class AndroidInstrumentationTest:
    r"""AndroidInstrumentationTest
    A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
    """
    
    app_apk: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appApk') }})
    app_bundle: Optional[AppBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundle') }})
    app_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPackageId') }})
    orchestrator_option: Optional[AndroidInstrumentationTestOrchestratorOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orchestratorOption') }})
    sharding_option: Optional[ShardingOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardingOption') }})
    test_apk: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testApk') }})
    test_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPackageId') }})
    test_runner_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testRunnerClass') }})
    test_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTargets') }})
    
