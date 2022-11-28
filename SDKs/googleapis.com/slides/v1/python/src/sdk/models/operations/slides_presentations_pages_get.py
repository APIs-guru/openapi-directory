from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SlidesPresentationsPagesGetPathParams:
    page_object_id: str = field(metadata={'path_param': { 'field_name': 'pageObjectId', 'style': 'simple', 'explode': False }})
    presentation_id: str = field(metadata={'path_param': { 'field_name': 'presentationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SlidesPresentationsPagesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class SlidesPresentationsPagesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetSecurity:
    option1: Optional[SlidesPresentationsPagesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SlidesPresentationsPagesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SlidesPresentationsPagesGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[SlidesPresentationsPagesGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[SlidesPresentationsPagesGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SlidesPresentationsPagesGetRequest:
    path_params: SlidesPresentationsPagesGetPathParams = field()
    query_params: SlidesPresentationsPagesGetQueryParams = field()
    security: SlidesPresentationsPagesGetSecurity = field()
    

@dataclass
class SlidesPresentationsPagesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page: Optional[shared.Page] = field(default=None)
    
