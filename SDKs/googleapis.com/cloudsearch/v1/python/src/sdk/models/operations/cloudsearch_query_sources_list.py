from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudsearchQuerySourcesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    request_options_debug_options_enable_debugging: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'requestOptions.debugOptions.enableDebugging', 'style': 'form', 'explode': True }})
    request_options_language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requestOptions.languageCode', 'style': 'form', 'explode': True }})
    request_options_search_application_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requestOptions.searchApplicationId', 'style': 'form', 'explode': True }})
    request_options_time_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requestOptions.timeZone', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudsearchQuerySourcesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchQuerySourcesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchQuerySourcesListSecurity:
    option1: Optional[CloudsearchQuerySourcesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudsearchQuerySourcesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudsearchQuerySourcesListRequest:
    query_params: CloudsearchQuerySourcesListQueryParams = field()
    security: CloudsearchQuerySourcesListSecurity = field()
    

@dataclass
class CloudsearchQuerySourcesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_query_sources_response: Optional[shared.ListQuerySourcesResponse] = field(default=None)
    
