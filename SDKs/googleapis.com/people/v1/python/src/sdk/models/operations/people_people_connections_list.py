from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PeoplePeopleConnectionsListPathParams:
    resource_name: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    
class PeoplePeopleConnectionsListSortOrderEnum(str, Enum):
    LAST_MODIFIED_ASCENDING = "LAST_MODIFIED_ASCENDING"
    LAST_MODIFIED_DESCENDING = "LAST_MODIFIED_DESCENDING"
    FIRST_NAME_ASCENDING = "FIRST_NAME_ASCENDING"
    LAST_NAME_ASCENDING = "LAST_NAME_ASCENDING"

class PeoplePeopleConnectionsListSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass
class PeoplePeopleConnectionsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    person_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'personFields', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    request_mask_include_field: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requestMask.includeField', 'style': 'form', 'explode': True }})
    request_sync_token: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'requestSyncToken', 'style': 'form', 'explode': True }})
    sort_order: Optional[PeoplePeopleConnectionsListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    sources: Optional[List[PeoplePeopleConnectionsListSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PeoplePeopleConnectionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleConnectionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleConnectionsListSecurity:
    option1: Optional[PeoplePeopleConnectionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PeoplePeopleConnectionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PeoplePeopleConnectionsListRequest:
    path_params: PeoplePeopleConnectionsListPathParams = field(default=None)
    query_params: PeoplePeopleConnectionsListQueryParams = field(default=None)
    security: PeoplePeopleConnectionsListSecurity = field(default=None)
    

@dataclass
class PeoplePeopleConnectionsListResponse:
    content_type: str = field(default=None)
    list_connections_response: Optional[shared.ListConnectionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
