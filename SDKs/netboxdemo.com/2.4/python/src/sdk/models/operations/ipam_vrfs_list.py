from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IpamVrfsListQueryParams:
    enforce_unique: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enforce_unique', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rd: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rd', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class IpamVrfsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Vrf] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class IpamVrfsListRequest:
    query_params: IpamVrfsListQueryParams = field()
    

@dataclass
class IpamVrfsListResponse:
    content_type: str = field()
    status_code: int = field()
    ipam_vrfs_list_200_application_json_object: Optional[IpamVrfsList200ApplicationJSON] = field(default=None)
    
