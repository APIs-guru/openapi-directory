from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkloadsConfig:
    r"""WorkloadsConfig
    The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
    """
    
    scheduler: Optional[SchedulerResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduler') }})
    web_server: Optional[WebServerResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServer') }})
    worker: Optional[WorkerResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worker') }})
    
