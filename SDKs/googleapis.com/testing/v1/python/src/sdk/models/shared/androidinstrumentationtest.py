from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filereference
from . import appbundle
from . import shardingoption
from . import filereference

class AndroidInstrumentationTestOrchestratorOptionEnum(str, Enum):
    ORCHESTRATOR_OPTION_UNSPECIFIED = "ORCHESTRATOR_OPTION_UNSPECIFIED"
    USE_ORCHESTRATOR = "USE_ORCHESTRATOR"
    DO_NOT_USE_ORCHESTRATOR = "DO_NOT_USE_ORCHESTRATOR"


@dataclass_json
@dataclass
class AndroidInstrumentationTest:
    app_apk: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appApk' }})
    app_bundle: Optional[appbundle.AppBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appBundle' }})
    app_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPackageId' }})
    orchestrator_option: Optional[AndroidInstrumentationTestOrchestratorOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orchestratorOption' }})
    sharding_option: Optional[shardingoption.ShardingOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardingOption' }})
    test_apk: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testApk' }})
    test_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testPackageId' }})
    test_runner_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testRunnerClass' }})
    test_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTargets' }})
    
