from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesListQueryParams:
    devicetype_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devicetype_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DcimConsoleServerPortTemplatesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.ConsoleServerPortTemplate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class DcimConsoleServerPortTemplatesListRequest:
    query_params: DcimConsoleServerPortTemplatesListQueryParams = field()
    

@dataclass
class DcimConsoleServerPortTemplatesListResponse:
    content_type: str = field()
    status_code: int = field()
    dcim_console_server_port_templates_list_200_application_json_object: Optional[DcimConsoleServerPortTemplatesList200ApplicationJSON] = field(default=None)
    
