from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SpannerIoDetails:
    r"""SpannerIoDetails
    Metadata for a Spanner connector used by the job.
    """
    
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseId') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    
