from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FormsFormsResponsesGetPathParams:
    form_id: str = field(metadata={'path_param': { 'field_name': 'formId', 'style': 'simple', 'explode': False }})
    response_id: str = field(metadata={'path_param': { 'field_name': 'responseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FormsFormsResponsesGetQueryParams:
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
class FormsFormsResponsesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsResponsesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsResponsesGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsResponsesGetSecurity:
    option1: Optional[FormsFormsResponsesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FormsFormsResponsesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FormsFormsResponsesGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FormsFormsResponsesGetRequest:
    path_params: FormsFormsResponsesGetPathParams = field()
    query_params: FormsFormsResponsesGetQueryParams = field()
    security: FormsFormsResponsesGetSecurity = field()
    

@dataclass
class FormsFormsResponsesGetResponse:
    content_type: str = field()
    status_code: int = field()
    form_response: Optional[shared.FormResponse] = field(default=None)
    
