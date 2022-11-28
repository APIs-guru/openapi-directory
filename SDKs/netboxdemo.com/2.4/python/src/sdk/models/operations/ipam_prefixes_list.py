from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IpamPrefixesListQueryParams:
    contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contains', 'style': 'form', 'explode': True }})
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_pool: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_pool', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mask_length: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'mask_length', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    vlan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vlan_id', 'style': 'form', 'explode': True }})
    vlan_vid: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vlan_vid', 'style': 'form', 'explode': True }})
    vrf: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vrf', 'style': 'form', 'explode': True }})
    vrf_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vrf_id', 'style': 'form', 'explode': True }})
    within: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'within', 'style': 'form', 'explode': True }})
    within_include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'within_include', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class IpamPrefixesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Prefix] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class IpamPrefixesListRequest:
    query_params: IpamPrefixesListQueryParams = field()
    

@dataclass
class IpamPrefixesListResponse:
    content_type: str = field()
    status_code: int = field()
    ipam_prefixes_list_200_application_json_object: Optional[IpamPrefixesList200ApplicationJSON] = field(default=None)
    
