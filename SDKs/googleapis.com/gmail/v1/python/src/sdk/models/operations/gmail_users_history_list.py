from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GmailUsersHistoryListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class GmailUsersHistoryListHistoryTypesEnum(str, Enum):
    MESSAGE_ADDED = "messageAdded"
    MESSAGE_DELETED = "messageDeleted"
    LABEL_ADDED = "labelAdded"
    LABEL_REMOVED = "labelRemoved"


@dataclass
class GmailUsersHistoryListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    history_types: Optional[List[GmailUsersHistoryListHistoryTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'historyTypes', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    label_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labelId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_history_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startHistoryId', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class GmailUsersHistoryListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersHistoryListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersHistoryListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersHistoryListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GmailUsersHistoryListSecurity:
    option1: Optional[GmailUsersHistoryListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GmailUsersHistoryListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GmailUsersHistoryListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[GmailUsersHistoryListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GmailUsersHistoryListRequest:
    path_params: GmailUsersHistoryListPathParams = field()
    query_params: GmailUsersHistoryListQueryParams = field()
    security: GmailUsersHistoryListSecurity = field()
    

@dataclass
class GmailUsersHistoryListResponse:
    content_type: str = field()
    status_code: int = field()
    list_history_response: Optional[shared.ListHistoryResponse] = field(default=None)
    
