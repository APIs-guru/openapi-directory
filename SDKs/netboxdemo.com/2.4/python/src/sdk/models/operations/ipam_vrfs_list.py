from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
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
    

@dataclass
class IpamVrfsListRequest:
    query_params: IpamVrfsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class IpamVrfsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Vrf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class IpamVrfsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ipam_vrfs_list_200_application_json_object: Optional[IpamVrfsList200ApplicationJSON] = field(default=None)
    
