from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetLoggingServiceRequest:
    r"""SetLoggingServiceRequest
    SetLoggingServiceRequest sets the logging service of a cluster.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    logging_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingService') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
