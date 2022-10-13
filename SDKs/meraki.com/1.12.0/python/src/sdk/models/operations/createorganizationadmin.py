from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationAdminPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationAdminRequestBodyAuthenticationMethodEnum(str, Enum):
    EMAIL = "Email"
    CISCO_SECURE_X_SIGN_ON = "Cisco SecureX Sign-On"

class CreateOrganizationAdminRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class CreateOrganizationAdminRequestBodyNetworks:
    access: CreateOrganizationAdminRequestBodyNetworksAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class CreateOrganizationAdminRequestBodyOrgAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    ENTERPRISE = "enterprise"
    NONE = "none"

class CreateOrganizationAdminRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class CreateOrganizationAdminRequestBodyTags:
    access: CreateOrganizationAdminRequestBodyTagsAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass_json
@dataclass
class CreateOrganizationAdminRequestBody:
    authentication_method: Optional[CreateOrganizationAdminRequestBodyAuthenticationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationMethod' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: Optional[List[CreateOrganizationAdminRequestBodyNetworks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    org_access: CreateOrganizationAdminRequestBodyOrgAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgAccess' }})
    tags: Optional[List[CreateOrganizationAdminRequestBodyTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateOrganizationAdminRequest:
    path_params: CreateOrganizationAdminPathParams = field(default=None)
    request: CreateOrganizationAdminRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationAdminResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_admin_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
