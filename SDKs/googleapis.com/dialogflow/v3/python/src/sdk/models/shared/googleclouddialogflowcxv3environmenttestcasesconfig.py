from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig:
    r"""GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig
    The configuration for continuous tests.
    """
    
    enable_continuous_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableContinuousRun') }})
    enable_predeployment_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePredeploymentRun') }})
    test_cases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCases') }})
    
