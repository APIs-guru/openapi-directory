from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IpamServicesListQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    port: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'port', 'style': 'form', 'explode': True }})
    protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'protocol', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class IpamServicesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Service] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class IpamServicesListRequest:
    query_params: IpamServicesListQueryParams = field()
    

@dataclass
class IpamServicesListResponse:
    content_type: str = field()
    status_code: int = field()
    ipam_services_list_200_application_json_object: Optional[IpamServicesList200ApplicationJSON] = field(default=None)
    
