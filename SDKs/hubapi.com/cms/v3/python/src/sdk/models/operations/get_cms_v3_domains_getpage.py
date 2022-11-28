from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCmsV3DomainsGetPageQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt', 'style': 'form', 'explode': True }})
    created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    updated_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    updated_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt', 'style': 'form', 'explode': True }})
    updated_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedBefore', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCmsV3DomainsGetPageSecurity:
    hapikey: shared.SchemeHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCmsV3DomainsGetPageRequest:
    query_params: GetCmsV3DomainsGetPageQueryParams = field()
    security: GetCmsV3DomainsGetPageSecurity = field()
    

@dataclass
class GetCmsV3DomainsGetPageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    collection_response_with_total_domain_forward_paging: Optional[shared.CollectionResponseWithTotalDomainForwardPaging] = field(default=None)
    
