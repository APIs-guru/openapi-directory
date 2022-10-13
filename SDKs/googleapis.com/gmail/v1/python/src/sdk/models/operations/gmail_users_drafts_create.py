from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GmailUsersDraftsCreatePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GmailUsersDraftsCreateQueryParams:
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
class GmailUsersDraftsCreateRequests:
    message_cpim: bytes = field(default=None, metadata={'request': { 'media_type': 'message/cpim' }})
    message_delivery_status: bytes = field(default=None, metadata={'request': { 'media_type': 'message/delivery-status' }})
    message_disposition_notification: bytes = field(default=None, metadata={'request': { 'media_type': 'message/disposition-notification' }})
    message_external_body: bytes = field(default=None, metadata={'request': { 'media_type': 'message/external-body' }})
    message_feedback_report: bytes = field(default=None, metadata={'request': { 'media_type': 'message/feedback-report' }})
    message_global: bytes = field(default=None, metadata={'request': { 'media_type': 'message/global' }})
    message_global_delivery_status: bytes = field(default=None, metadata={'request': { 'media_type': 'message/global-delivery-status' }})
    message_global_disposition_notification: bytes = field(default=None, metadata={'request': { 'media_type': 'message/global-disposition-notification' }})
    message_global_headers: bytes = field(default=None, metadata={'request': { 'media_type': 'message/global-headers' }})
    message_http: bytes = field(default=None, metadata={'request': { 'media_type': 'message/http' }})
    message_imdn_plus_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'message/imdn+xml' }})
    message_news: bytes = field(default=None, metadata={'request': { 'media_type': 'message/news' }})
    message_partial: bytes = field(default=None, metadata={'request': { 'media_type': 'message/partial' }})
    message_rfc822: bytes = field(default=None, metadata={'request': { 'media_type': 'message/rfc822' }})
    message_shttp: bytes = field(default=None, metadata={'request': { 'media_type': 'message/s-http' }})
    message_sip: bytes = field(default=None, metadata={'request': { 'media_type': 'message/sip' }})
    message_sipfrag: bytes = field(default=None, metadata={'request': { 'media_type': 'message/sipfrag' }})
    message_tracking_status: bytes = field(default=None, metadata={'request': { 'media_type': 'message/tracking-status' }})
    message_vnd_si_simp: bytes = field(default=None, metadata={'request': { 'media_type': 'message/vnd.si.simp' }})
    message_vnd_wfa_wsc: bytes = field(default=None, metadata={'request': { 'media_type': 'message/vnd.wfa.wsc' }})
    

@dataclass
class GmailUsersDraftsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsCreateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsCreateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsCreateSecurity:
    option1: Optional[GmailUsersDraftsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GmailUsersDraftsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GmailUsersDraftsCreateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[GmailUsersDraftsCreateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GmailUsersDraftsCreateRequest:
    path_params: GmailUsersDraftsCreatePathParams = field(default=None)
    query_params: GmailUsersDraftsCreateQueryParams = field(default=None)
    request: Optional[GmailUsersDraftsCreateRequests] = field(default=None)
    security: GmailUsersDraftsCreateSecurity = field(default=None)
    

@dataclass
class GmailUsersDraftsCreateResponse:
    content_type: str = field(default=None)
    draft: Optional[shared.Draft] = field(default=None)
    status_code: int = field(default=None)
    
