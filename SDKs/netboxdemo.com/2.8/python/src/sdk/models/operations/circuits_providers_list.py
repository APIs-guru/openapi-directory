from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CircuitsProvidersListQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    account_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__ic', 'style': 'form', 'explode': True }})
    account_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__ie', 'style': 'form', 'explode': True }})
    account_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__iew', 'style': 'form', 'explode': True }})
    account_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__isw', 'style': 'form', 'explode': True }})
    account_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__n', 'style': 'form', 'explode': True }})
    account_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__nic', 'style': 'form', 'explode': True }})
    account_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__nie', 'style': 'form', 'explode': True }})
    account_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__niew', 'style': 'form', 'explode': True }})
    account_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account__nisw', 'style': 'form', 'explode': True }})
    asn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asn', 'style': 'form', 'explode': True }})
    asn_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asn__gt', 'style': 'form', 'explode': True }})
    asn_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asn__gte', 'style': 'form', 'explode': True }})
    asn_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asn__lt', 'style': 'form', 'explode': True }})
    asn_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asn__lte', 'style': 'form', 'explode': True }})
    asn_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asn__n', 'style': 'form', 'explode': True }})
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    last_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated', 'style': 'form', 'explode': True }})
    last_updated_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__gte', 'style': 'form', 'explode': True }})
    last_updated_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__lte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    name_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__ic', 'style': 'form', 'explode': True }})
    name_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__ie', 'style': 'form', 'explode': True }})
    name_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__iew', 'style': 'form', 'explode': True }})
    name_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__isw', 'style': 'form', 'explode': True }})
    name_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__n', 'style': 'form', 'explode': True }})
    name_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nic', 'style': 'form', 'explode': True }})
    name_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nie', 'style': 'form', 'explode': True }})
    name_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__niew', 'style': 'form', 'explode': True }})
    name_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region__n', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    region_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id__n', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    slug_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__ic', 'style': 'form', 'explode': True }})
    slug_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__ie', 'style': 'form', 'explode': True }})
    slug_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__iew', 'style': 'form', 'explode': True }})
    slug_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__isw', 'style': 'form', 'explode': True }})
    slug_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__n', 'style': 'form', 'explode': True }})
    slug_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__nic', 'style': 'form', 'explode': True }})
    slug_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__nie', 'style': 'form', 'explode': True }})
    slug_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__niew', 'style': 'form', 'explode': True }})
    slug_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__nisw', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    

@dataclass
class CircuitsProvidersListRequest:
    query_params: CircuitsProvidersListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CircuitsProvidersList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Provider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class CircuitsProvidersListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    circuits_providers_list_200_application_json_object: Optional[CircuitsProvidersList200ApplicationJSON] = field(default=None)
    
