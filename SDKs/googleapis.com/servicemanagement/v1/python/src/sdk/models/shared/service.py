from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import api
from . import authentication
from . import backend
from . import billing
from . import context
from . import control
from . import customerror
from . import documentation
from . import endpoint
from . import enum
from . import http
from . import logging
from . import logdescriptor
from . import metricdescriptor
from . import monitoredresourcedescriptor
from . import monitoring
from . import quota
from . import sourceinfo
from . import systemparameters
from . import type
from . import type
from . import usage


@dataclass_json
@dataclass
class Service:
    apis: Optional[List[api.API]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apis' }})
    authentication: Optional[authentication.Authentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    backend: Optional[backend.Backend] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backend' }})
    billing: Optional[billing.Billing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing' }})
    config_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configVersion' }})
    context: Optional[context.Context] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    control: Optional[control.Control] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    custom_error: Optional[customerror.CustomError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customError' }})
    documentation: Optional[documentation.Documentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    endpoints: Optional[List[endpoint.Endpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    enums: Optional[List[enum.Enum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enums' }})
    http: Optional[http.HTTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logging: Optional[logging.Logging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    logs: Optional[List[logdescriptor.LogDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    metrics: Optional[List[metricdescriptor.MetricDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    monitored_resources: Optional[List[monitoredresourcedescriptor.MonitoredResourceDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResources' }})
    monitoring: Optional[monitoring.Monitoring] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoring' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    producer_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerProjectId' }})
    quota: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    source_info: Optional[sourceinfo.SourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInfo' }})
    system_parameters: Optional[systemparameters.SystemParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemParameters' }})
    system_types: Optional[List[type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemTypes' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    types: Optional[List[type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    usage: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    
