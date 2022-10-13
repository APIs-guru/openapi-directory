from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class IamProjectsServiceAccountsKeysListPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class IamProjectsServiceAccountsKeysListKeyTypesEnum(str, Enum):
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED"
    USER_MANAGED = "USER_MANAGED"
    SYSTEM_MANAGED = "SYSTEM_MANAGED"


@dataclass
class IamProjectsServiceAccountsKeysListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    key_types: Optional[List[IamProjectsServiceAccountsKeysListKeyTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'keyTypes', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class IamProjectsServiceAccountsKeysListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IamProjectsServiceAccountsKeysListRequest:
    path_params: IamProjectsServiceAccountsKeysListPathParams = field(default=None)
    query_params: IamProjectsServiceAccountsKeysListQueryParams = field(default=None)
    security: IamProjectsServiceAccountsKeysListSecurity = field(default=None)
    

@dataclass
class IamProjectsServiceAccountsKeysListResponse:
    content_type: str = field(default=None)
    list_service_account_keys_response: Optional[shared.ListServiceAccountKeysResponse] = field(default=None)
    status_code: int = field(default=None)
    
