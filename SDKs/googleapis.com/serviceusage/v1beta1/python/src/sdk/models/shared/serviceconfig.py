from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api
from . import authentication
from . import documentation
from . import endpoint
from . import monitoredresourcedescriptor
from . import monitoring
from . import quota
from . import usage


@dataclass_json
@dataclass
class ServiceConfig:
    apis: Optional[List[api.API]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apis' }})
    authentication: Optional[authentication.Authentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    documentation: Optional[documentation.Documentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    endpoints: Optional[List[endpoint.Endpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    monitored_resources: Optional[List[monitoredresourcedescriptor.MonitoredResourceDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResources' }})
    monitoring: Optional[monitoring.Monitoring] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoring' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    quota: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    usage: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    
