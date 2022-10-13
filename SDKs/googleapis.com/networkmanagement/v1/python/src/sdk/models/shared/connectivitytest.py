from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpoint
from . import reachabilitydetails
from . import endpoint


@dataclass_json
@dataclass
class ConnectivityTest:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    reachability_details: Optional[reachabilitydetails.ReachabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachabilityDetails' }})
    related_projects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedProjects' }})
    source: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
