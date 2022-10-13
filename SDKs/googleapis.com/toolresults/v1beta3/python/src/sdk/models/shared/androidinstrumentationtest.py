from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AndroidInstrumentationTest:
    test_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testPackageId' }})
    test_runner_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testRunnerClass' }})
    test_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTargets' }})
    use_orchestrator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useOrchestrator' }})
    
