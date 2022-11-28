from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FormsFormsWatchesListPathParams:
    form_id: str = field(metadata={'path_param': { 'field_name': 'formId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FormsFormsWatchesListQueryParams:
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
class FormsFormsWatchesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesListSecurity:
    option1: Optional[FormsFormsWatchesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FormsFormsWatchesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FormsFormsWatchesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FormsFormsWatchesListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FormsFormsWatchesListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FormsFormsWatchesListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FormsFormsWatchesListRequest:
    path_params: FormsFormsWatchesListPathParams = field()
    query_params: FormsFormsWatchesListQueryParams = field()
    security: FormsFormsWatchesListSecurity = field()
    

@dataclass
class FormsFormsWatchesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_watches_response: Optional[shared.ListWatchesResponse] = field(default=None)
    
