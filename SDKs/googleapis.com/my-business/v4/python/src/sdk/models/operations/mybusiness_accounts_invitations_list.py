from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MybusinessAccountsInvitationsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class MybusinessAccountsInvitationsListTargetTypeEnum(str, Enum):
    ALL = "ALL"
    ACCOUNTS_ONLY = "ACCOUNTS_ONLY"
    LOCATIONS_ONLY = "LOCATIONS_ONLY"


@dataclass
class MybusinessAccountsInvitationsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    target_type: Optional[MybusinessAccountsInvitationsListTargetTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'targetType', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class MybusinessAccountsInvitationsListRequest:
    path_params: MybusinessAccountsInvitationsListPathParams = field()
    query_params: MybusinessAccountsInvitationsListQueryParams = field()
    

@dataclass
class MybusinessAccountsInvitationsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_invitations_response: Optional[shared.ListInvitationsResponse] = field(default=None)
    
