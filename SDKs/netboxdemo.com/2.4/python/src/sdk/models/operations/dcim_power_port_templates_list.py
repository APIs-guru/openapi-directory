from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DcimPowerPortTemplatesListQueryParams:
    devicetype_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devicetype_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DcimPowerPortTemplatesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.PowerPortTemplate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class DcimPowerPortTemplatesListRequest:
    query_params: DcimPowerPortTemplatesListQueryParams = field()
    

@dataclass
class DcimPowerPortTemplatesListResponse:
    content_type: str = field()
    status_code: int = field()
    dcim_power_port_templates_list_200_application_json_object: Optional[DcimPowerPortTemplatesList200ApplicationJSON] = field(default=None)
    
