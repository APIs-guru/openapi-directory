from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMonitoredResourceDescriptorsResponse:
    r"""ListMonitoredResourceDescriptorsResponse
    Result returned from ListMonitoredResourceDescriptors.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resource_descriptors: Optional[List[MonitoredResourceDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceDescriptors') }})
    
