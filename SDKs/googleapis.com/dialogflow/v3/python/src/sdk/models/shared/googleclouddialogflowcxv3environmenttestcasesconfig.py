from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig:
    enable_continuous_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableContinuousRun' }})
    enable_predeployment_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePredeploymentRun' }})
    test_cases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCases' }})
    
