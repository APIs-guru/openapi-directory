from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ChatSpacesMessagesCreatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class ChatSpacesMessagesCreateMessageReplyOptionEnum(str, Enum):
    MESSAGE_REPLY_OPTION_UNSPECIFIED = "MESSAGE_REPLY_OPTION_UNSPECIFIED"
    REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
    REPLY_MESSAGE_OR_FAIL = "REPLY_MESSAGE_OR_FAIL"


@dataclass
class ChatSpacesMessagesCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    message_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'messageId', 'style': 'form', 'explode': True }})
    message_reply_option: Optional[ChatSpacesMessagesCreateMessageReplyOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'messageReplyOption', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requestId', 'style': 'form', 'explode': True }})
    thread_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'threadKey', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ChatSpacesMessagesCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChatSpacesMessagesCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChatSpacesMessagesCreateSecurity:
    option1: Optional[ChatSpacesMessagesCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ChatSpacesMessagesCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ChatSpacesMessagesCreateRequest:
    path_params: ChatSpacesMessagesCreatePathParams = field()
    query_params: ChatSpacesMessagesCreateQueryParams = field()
    security: ChatSpacesMessagesCreateSecurity = field()
    request: Optional[shared.MessageInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChatSpacesMessagesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    message: Optional[shared.Message] = field(default=None)
    
