from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationAdminPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
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
    access: CreateOrganizationAdminRequestBodyNetworksAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
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
    access: CreateOrganizationAdminRequestBodyTagsAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclass
class CreateOrganizationAdminRequestBody:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_access: CreateOrganizationAdminRequestBodyOrgAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    authentication_method: Optional[CreateOrganizationAdminRequestBodyAuthenticationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMethod') }})
    networks: Optional[List[CreateOrganizationAdminRequestBodyNetworks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    tags: Optional[List[CreateOrganizationAdminRequestBodyTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateOrganizationAdminRequest:
    path_params: CreateOrganizationAdminPathParams = field()
    request: CreateOrganizationAdminRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationAdminResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_admin_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
