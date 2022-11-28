from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GmailUsersMessagesImportPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class GmailUsersMessagesImportInternalDateSourceEnum(str, Enum):
    RECEIVED_TIME = "receivedTime"
    DATE_HEADER = "dateHeader"


@dataclass
class GmailUsersMessagesImportQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    internal_date_source: Optional[GmailUsersMessagesImportInternalDateSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'internalDateSource', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    never_mark_spam: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'neverMarkSpam', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    process_for_calendar: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'processForCalendar', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class GmailUsersMessagesImportRequests:
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
class GmailUsersMessagesImportSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersMessagesImportSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersMessagesImportSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersMessagesImportSecurity:
    option1: Optional[GmailUsersMessagesImportSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GmailUsersMessagesImportSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GmailUsersMessagesImportSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GmailUsersMessagesImportRequest:
    path_params: GmailUsersMessagesImportPathParams = field()
    query_params: GmailUsersMessagesImportQueryParams = field()
    security: GmailUsersMessagesImportSecurity = field()
    request: Optional[GmailUsersMessagesImportRequests] = field(default=None)
    

@dataclass
class GmailUsersMessagesImportResponse:
    content_type: str = field()
    status_code: int = field()
    message: Optional[shared.Message] = field(default=None)
    
