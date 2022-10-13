from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GroupsSettingsGroupsUpdatePathParams:
    group_unique_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupUniqueId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsSettingsGroupsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsSettingsGroupsUpdateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupsSettingsGroupsUpdateRequest:
    path_params: GroupsSettingsGroupsUpdatePathParams = field(default=None)
    query_params: GroupsSettingsGroupsUpdateQueryParams = field(default=None)
    request: Optional[shared.Groups] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GroupsSettingsGroupsUpdateSecurity = field(default=None)
    

@dataclass
class GroupsSettingsGroupsUpdateResponse:
    content_type: str = field(default=None)
    groups: Optional[shared.Groups] = field(default=None)
    status_code: int = field(default=None)
    
