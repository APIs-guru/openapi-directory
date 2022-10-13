from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationSamlRolePathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class UpdateOrganizationSamlRoleRequestBodyNetworks:
    access: UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum(str, Enum):
    NONE = "none"
    READ_ONLY = "read-only"
    FULL = "full"

class UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class UpdateOrganizationSamlRoleRequestBodyTags:
    access: UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationSamlRoleRequestBody:
    networks: Optional[List[UpdateOrganizationSamlRoleRequestBodyNetworks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    org_access: Optional[UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgAccess' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    tags: Optional[List[UpdateOrganizationSamlRoleRequestBodyTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class UpdateOrganizationSamlRoleRequest:
    path_params: UpdateOrganizationSamlRolePathParams = field(default=None)
    request: Optional[UpdateOrganizationSamlRoleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationSamlRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_saml_role_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
