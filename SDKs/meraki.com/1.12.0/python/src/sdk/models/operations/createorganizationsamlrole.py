from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationSamlRolePathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class CreateOrganizationSamlRoleRequestBodyNetworks:
    access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
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
    access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclass
class CreateOrganizationSamlRoleRequestBody:
    org_access: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    networks: Optional[List[CreateOrganizationSamlRoleRequestBodyNetworks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    tags: Optional[List[CreateOrganizationSamlRoleRequestBodyTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateOrganizationSamlRoleRequest:
    path_params: CreateOrganizationSamlRolePathParams = field()
    request: CreateOrganizationSamlRoleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationSamlRoleResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_saml_role_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
