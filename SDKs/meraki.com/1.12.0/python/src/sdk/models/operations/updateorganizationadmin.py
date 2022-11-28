from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationAdminPathParams:
    admin_id: str = field(metadata={'path_param': { 'field_name': 'adminId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationAdminRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class UpdateOrganizationAdminRequestBodyNetworks:
    access: UpdateOrganizationAdminRequestBodyNetworksAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class UpdateOrganizationAdminRequestBodyOrgAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    ENTERPRISE = "enterprise"
    NONE = "none"

class UpdateOrganizationAdminRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclass
class UpdateOrganizationAdminRequestBodyTags:
    access: UpdateOrganizationAdminRequestBodyTagsAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationAdminRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[List[UpdateOrganizationAdminRequestBodyNetworks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    org_access: Optional[UpdateOrganizationAdminRequestBodyOrgAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    tags: Optional[List[UpdateOrganizationAdminRequestBodyTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class UpdateOrganizationAdminRequest:
    path_params: UpdateOrganizationAdminPathParams = field()
    request: Optional[UpdateOrganizationAdminRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationAdminResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_admin_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
