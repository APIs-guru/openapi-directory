from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MirrorAccountsInsertPathParams:
    account_name: str = field(metadata={'path_param': { 'field_name': 'accountName', 'style': 'simple', 'explode': False }})
    account_type: str = field(metadata={'path_param': { 'field_name': 'accountType', 'style': 'simple', 'explode': False }})
    user_token: str = field(metadata={'path_param': { 'field_name': 'userToken', 'style': 'simple', 'explode': False }})
    

@dataclass
class MirrorAccountsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class MirrorAccountsInsertRequest:
    path_params: MirrorAccountsInsertPathParams = field()
    query_params: MirrorAccountsInsertQueryParams = field()
    request: Optional[shared.Account] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MirrorAccountsInsertResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
