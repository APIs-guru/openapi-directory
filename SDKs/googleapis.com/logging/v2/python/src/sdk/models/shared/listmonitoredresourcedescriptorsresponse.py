from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoredresourcedescriptor


@dataclass_json
@dataclass
class ListMonitoredResourceDescriptorsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resource_descriptors: Optional[List[monitoredresourcedescriptor.MonitoredResourceDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceDescriptors' }})
    
