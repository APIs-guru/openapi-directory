from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeployJobRunMetadata:
    r"""DeployJobRunMetadata
    DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
    """
    
    cloud_run: Optional[CloudRunMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    
