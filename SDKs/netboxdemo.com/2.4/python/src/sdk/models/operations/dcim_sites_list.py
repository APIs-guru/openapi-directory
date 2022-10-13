from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimSitesListQueryParams:
    asn: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'asn', 'style': 'form', 'explode': True }})
    contact_email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contact_email', 'style': 'form', 'explode': True }})
    contact_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contact_name', 'style': 'form', 'explode': True }})
    contact_phone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contact_phone', 'style': 'form', 'explode': True }})
    facility: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facility', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimSitesListRequest:
    query_params: DcimSitesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimSitesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Site] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimSitesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_sites_list_200_application_json_object: Optional[DcimSitesList200ApplicationJSON] = field(default=None)
    
