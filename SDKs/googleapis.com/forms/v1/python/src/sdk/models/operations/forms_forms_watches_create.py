from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FormsFormsWatchesCreatePathParams:
    form_id: str = field(metadata={'path_param': { 'field_name': 'formId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FormsFormsWatchesCreateQueryParams:
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
class FormsFormsWatchesCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesCreateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesCreateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesCreateSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesCreateSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesCreateSecurity:
    option1: Optional[FormsFormsWatchesCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FormsFormsWatchesCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FormsFormsWatchesCreateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FormsFormsWatchesCreateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FormsFormsWatchesCreateSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FormsFormsWatchesCreateSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FormsFormsWatchesCreateRequest:
    path_params: FormsFormsWatchesCreatePathParams = field()
    query_params: FormsFormsWatchesCreateQueryParams = field()
    security: FormsFormsWatchesCreateSecurity = field()
    request: Optional[shared.CreateWatchRequestInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FormsFormsWatchesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    watch: Optional[shared.Watch] = field(default=None)
    
