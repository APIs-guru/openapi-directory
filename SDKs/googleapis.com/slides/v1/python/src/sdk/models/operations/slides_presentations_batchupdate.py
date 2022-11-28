from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SlidesPresentationsBatchUpdatePathParams:
    presentation_id: str = field(metadata={'path_param': { 'field_name': 'presentationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SlidesPresentationsBatchUpdateQueryParams:
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
class SlidesPresentationsBatchUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsBatchUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsBatchUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsBatchUpdateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsBatchUpdateSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsBatchUpdateSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsBatchUpdateSecurity:
    option1: Optional[SlidesPresentationsBatchUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SlidesPresentationsBatchUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SlidesPresentationsBatchUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[SlidesPresentationsBatchUpdateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[SlidesPresentationsBatchUpdateSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[SlidesPresentationsBatchUpdateSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SlidesPresentationsBatchUpdateRequest:
    path_params: SlidesPresentationsBatchUpdatePathParams = field()
    query_params: SlidesPresentationsBatchUpdateQueryParams = field()
    security: SlidesPresentationsBatchUpdateSecurity = field()
    request: Optional[shared.BatchUpdatePresentationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SlidesPresentationsBatchUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    batch_update_presentation_response: Optional[shared.BatchUpdatePresentationResponse] = field(default=None)
    
