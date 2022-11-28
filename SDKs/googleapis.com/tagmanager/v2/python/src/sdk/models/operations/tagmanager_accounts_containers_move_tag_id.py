from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TagmanagerAccountsContainersMoveTagIDPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagmanagerAccountsContainersMoveTagIDQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    allow_user_permission_feature_update: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowUserPermissionFeatureUpdate', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    copy_settings: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'copySettings', 'style': 'form', 'explode': True }})
    copy_terms_of_service: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'copyTermsOfService', 'style': 'form', 'explode': True }})
    copy_users: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'copyUsers', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    tag_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    tag_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class TagmanagerAccountsContainersMoveTagIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TagmanagerAccountsContainersMoveTagIDRequest:
    path_params: TagmanagerAccountsContainersMoveTagIDPathParams = field()
    query_params: TagmanagerAccountsContainersMoveTagIDQueryParams = field()
    security: TagmanagerAccountsContainersMoveTagIDSecurity = field()
    

@dataclass
class TagmanagerAccountsContainersMoveTagIDResponse:
    content_type: str = field()
    status_code: int = field()
    container: Optional[shared.Container] = field(default=None)
    
