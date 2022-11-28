from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    send_as_email: str = field(metadata={'path_param': { 'field_name': 'sendAsEmail', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetQueryParams:
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
class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetSecurity:
    option1: Optional[GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetRequest:
    path_params: GmailUsersSettingsSendAsSmimeInfoGetPathParams = field()
    query_params: GmailUsersSettingsSendAsSmimeInfoGetQueryParams = field()
    security: GmailUsersSettingsSendAsSmimeInfoGetSecurity = field()
    

@dataclass
class GmailUsersSettingsSendAsSmimeInfoGetResponse:
    content_type: str = field()
    status_code: int = field()
    smime_info: Optional[shared.SmimeInfo] = field(default=None)
    
