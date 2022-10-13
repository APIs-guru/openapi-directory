from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DeploymentResult:
    deployment_test_results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentTestResults' }})
    experiment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experiment' }})
    
