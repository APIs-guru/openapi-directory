from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GmailUsersDraftsUpdatePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GmailUsersDraftsUpdateQueryParams:
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
class GmailUsersDraftsUpdateRequests:
    message_cpim: bytes = field(metadata={'request': { 'media_type': 'message/cpim' }})
    message_delivery_status: bytes = field(metadata={'request': { 'media_type': 'message/delivery-status' }})
    message_disposition_notification: bytes = field(metadata={'request': { 'media_type': 'message/disposition-notification' }})
    message_external_body: bytes = field(metadata={'request': { 'media_type': 'message/external-body' }})
    message_feedback_report: bytes = field(metadata={'request': { 'media_type': 'message/feedback-report' }})
    message_global: bytes = field(metadata={'request': { 'media_type': 'message/global' }})
    message_global_delivery_status: bytes = field(metadata={'request': { 'media_type': 'message/global-delivery-status' }})
    message_global_disposition_notification: bytes = field(metadata={'request': { 'media_type': 'message/global-disposition-notification' }})
    message_global_headers: bytes = field(metadata={'request': { 'media_type': 'message/global-headers' }})
    message_http: bytes = field(metadata={'request': { 'media_type': 'message/http' }})
    message_imdn_plus_xml: bytes = field(metadata={'request': { 'media_type': 'message/imdn+xml' }})
    message_news: bytes = field(metadata={'request': { 'media_type': 'message/news' }})
    message_partial: bytes = field(metadata={'request': { 'media_type': 'message/partial' }})
    message_rfc822: bytes = field(metadata={'request': { 'media_type': 'message/rfc822' }})
    message_shttp: bytes = field(metadata={'request': { 'media_type': 'message/s-http' }})
    message_sip: bytes = field(metadata={'request': { 'media_type': 'message/sip' }})
    message_sipfrag: bytes = field(metadata={'request': { 'media_type': 'message/sipfrag' }})
    message_tracking_status: bytes = field(metadata={'request': { 'media_type': 'message/tracking-status' }})
    message_vnd_si_simp: bytes = field(metadata={'request': { 'media_type': 'message/vnd.si.simp' }})
    message_vnd_wfa_wsc: bytes = field(metadata={'request': { 'media_type': 'message/vnd.wfa.wsc' }})
    

@dataclass
class GmailUsersDraftsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsUpdateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersDraftsUpdateSecurity:
    option1: Optional[GmailUsersDraftsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GmailUsersDraftsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GmailUsersDraftsUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[GmailUsersDraftsUpdateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GmailUsersDraftsUpdateRequest:
    path_params: GmailUsersDraftsUpdatePathParams = field()
    query_params: GmailUsersDraftsUpdateQueryParams = field()
    security: GmailUsersDraftsUpdateSecurity = field()
    request: Optional[GmailUsersDraftsUpdateRequests] = field(default=None)
    

@dataclass
class GmailUsersDraftsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    draft: Optional[shared.Draft] = field(default=None)
    
