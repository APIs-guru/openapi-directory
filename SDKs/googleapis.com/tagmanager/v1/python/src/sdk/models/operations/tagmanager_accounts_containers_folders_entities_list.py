from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TagmanagerAccountsContainersFoldersEntitiesListPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    container_id: str = field(metadata={'path_param': { 'field_name': 'containerId', 'style': 'simple', 'explode': False }})
    folder_id: str = field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagmanagerAccountsContainersFoldersEntitiesListQueryParams:
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
class TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TagmanagerAccountsContainersFoldersEntitiesListSecurity:
    option1: Optional[TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class TagmanagerAccountsContainersFoldersEntitiesListRequest:
    path_params: TagmanagerAccountsContainersFoldersEntitiesListPathParams = field()
    query_params: TagmanagerAccountsContainersFoldersEntitiesListQueryParams = field()
    security: TagmanagerAccountsContainersFoldersEntitiesListSecurity = field()
    

@dataclass
class TagmanagerAccountsContainersFoldersEntitiesListResponse:
    content_type: str = field()
    status_code: int = field()
    folder_entities: Optional[shared.FolderEntities] = field(default=None)
    
