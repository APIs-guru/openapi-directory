from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import job
from . import job


@dataclass_json
@dataclass
class DeploymentJobs:
    deploy_job: Optional[job.Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployJob' }})
    verify_job: Optional[job.Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyJob' }})
    
