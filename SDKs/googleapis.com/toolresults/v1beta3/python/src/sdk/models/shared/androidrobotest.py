from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AndroidRoboTest:
    app_initial_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appInitialActivity' }})
    bootstrap_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootstrapPackageId' }})
    bootstrap_runner_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootstrapRunnerClass' }})
    max_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDepth' }})
    max_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSteps' }})
    
