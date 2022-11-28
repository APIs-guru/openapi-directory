from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentJobs:
    r"""DeploymentJobs
    Deployment job composition.
    """
    
    deploy_job: Optional[Job] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployJob') }})
    verify_job: Optional[Job] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyJob') }})
    
