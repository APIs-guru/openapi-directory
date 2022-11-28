from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class YoutubeCaptionsListQueryParams:
    part: List[str] = field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    video_id: str = field(metadata={'query_param': { 'field_name': 'videoId', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOf', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeCaptionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeCaptionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeCaptionsListSecurity:
    option1: Optional[YoutubeCaptionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeCaptionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class YoutubeCaptionsListRequest:
    query_params: YoutubeCaptionsListQueryParams = field()
    security: YoutubeCaptionsListSecurity = field()
    

@dataclass
class YoutubeCaptionsListResponse:
    content_type: str = field()
    status_code: int = field()
    caption_list_response: Optional[shared.CaptionListResponse] = field(default=None)
    
