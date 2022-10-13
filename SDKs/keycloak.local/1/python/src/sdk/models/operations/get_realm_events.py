from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmEventsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmEventsQueryParams:
    client: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client', 'style': 'form', 'explode': True }})
    date_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ipAddress', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmEventsRequest:
    path_params: GetRealmEventsPathParams = field(default=None)
    query_params: GetRealmEventsQueryParams = field(default=None)
    

@dataclass
class GetRealmEventsResponse:
    content_type: str = field(default=None)
    event_representations: Optional[List[shared.EventRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
