from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationSamlRolePathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class CreateOrganizationSamlRoleRequestBodyNetworks:
    access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class CreateOrganizationSamlRoleRequestBodyOrgAccessEnum(str, Enum):
    NONE = "none"
    READ_ONLY = "read-only"
    FULL = "full"

class CreateOrganizationSamlRoleRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class CreateOrganizationSamlRoleRequestBodyTags:
    access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass_json
@dataclass
class CreateOrganizationSamlRoleRequestBody:
    networks: Optional[List[CreateOrganizationSamlRoleRequestBodyNetworks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    org_access: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgAccess' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    tags: Optional[List[CreateOrganizationSamlRoleRequestBodyTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateOrganizationSamlRoleRequest:
    path_params: CreateOrganizationSamlRolePathParams = field(default=None)
    request: CreateOrganizationSamlRoleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationSamlRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_saml_role_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
