from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmAdminEventsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAdminEventsQueryParams:
    auth_client: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authClient', 'style': 'form', 'explode': True }})
    auth_ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authIpAddress', 'style': 'form', 'explode': True }})
    auth_realm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authRealm', 'style': 'form', 'explode': True }})
    auth_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authUser', 'style': 'form', 'explode': True }})
    date_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    operation_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'operationTypes', 'style': 'form', 'explode': True }})
    resource_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourcePath', 'style': 'form', 'explode': True }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'resourceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmAdminEventsRequest:
    path_params: GetRealmAdminEventsPathParams = field()
    query_params: GetRealmAdminEventsQueryParams = field()
    

@dataclass
class GetRealmAdminEventsResponse:
    content_type: str = field()
    status_code: int = field()
    admin_event_representations: Optional[List[shared.AdminEventRepresentation]] = field(default=None)
    
