from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DeploymentResult:
    r"""GoogleCloudDialogflowCxV3beta1DeploymentResult
    Result of the deployment.
    """
    
    deployment_test_results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentTestResults') }})
    experiment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiment') }})
    
