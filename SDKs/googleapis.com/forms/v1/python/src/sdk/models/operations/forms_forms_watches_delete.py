from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FormsFormsWatchesDeletePathParams:
    form_id: str = field(metadata={'path_param': { 'field_name': 'formId', 'style': 'simple', 'explode': False }})
    watch_id: str = field(metadata={'path_param': { 'field_name': 'watchId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FormsFormsWatchesDeleteQueryParams:
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
class FormsFormsWatchesDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesDeleteSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesDeleteSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesDeleteSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesDeleteSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FormsFormsWatchesDeleteSecurity:
    option1: Optional[FormsFormsWatchesDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FormsFormsWatchesDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FormsFormsWatchesDeleteSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FormsFormsWatchesDeleteSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FormsFormsWatchesDeleteSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FormsFormsWatchesDeleteSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FormsFormsWatchesDeleteRequest:
    path_params: FormsFormsWatchesDeletePathParams = field()
    query_params: FormsFormsWatchesDeleteQueryParams = field()
    security: FormsFormsWatchesDeleteSecurity = field()
    

@dataclass
class FormsFormsWatchesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
