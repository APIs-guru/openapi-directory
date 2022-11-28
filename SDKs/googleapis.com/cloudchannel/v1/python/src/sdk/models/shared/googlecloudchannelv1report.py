from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Report:
    r"""GoogleCloudChannelV1Report
    The ID and description of a report that was used to generate report data. For example, \"GCP Daily Spend\", \"Google Workspace License Activity\", etc.
    """
    
    columns: Optional[List[GoogleCloudChannelV1Column]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
