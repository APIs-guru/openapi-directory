from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
    `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: \"google.calendar.v3.*\" restriction: PREVIEW backend: rules: - selector: \"google.calendar.v3.*\" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: \"*\" requirements: provider_id: google_calendar_auth
    """
    
    apis: Optional[List[API]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apis') }})
    authentication: Optional[Authentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    backend: Optional[Backend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backend') }})
    billing: Optional[Billing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    config_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configVersion') }})
    context: Optional[Context] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    control: Optional[Control] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    custom_error: Optional[CustomError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customError') }})
    documentation: Optional[Documentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoints: Optional[List[Endpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    enums: Optional[List[Enum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enums') }})
    http: Optional[HTTP] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logging: Optional[Logging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    logs: Optional[List[LogDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    metrics: Optional[List[MetricDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    monitored_resources: Optional[List[MonitoredResourceDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResources') }})
    monitoring: Optional[Monitoring] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    producer_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerProjectId') }})
    quota: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    source_info: Optional[SourceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceInfo') }})
    system_parameters: Optional[SystemParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemParameters') }})
    system_types: Optional[List[Type]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemTypes') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    types: Optional[List[Type]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    usage: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
