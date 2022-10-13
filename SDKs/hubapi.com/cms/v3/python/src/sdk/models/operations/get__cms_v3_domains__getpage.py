from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCmsV3DomainsGetPageQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    created_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_at: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt', 'style': 'form', 'explode': True }})
    created_before: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    updated_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    updated_at: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt', 'style': 'form', 'explode': True }})
    updated_before: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'updatedBefore', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCmsV3DomainsGetPageSecurity:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCmsV3DomainsGetPageRequest:
    query_params: GetCmsV3DomainsGetPageQueryParams = field(default=None)
    security: GetCmsV3DomainsGetPageSecurity = field(default=None)
    

@dataclass
class GetCmsV3DomainsGetPageResponse:
    body: bytes = field(default=None)
    collection_response_with_total_domain: Optional[shared.CollectionResponseWithTotalDomain] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
