from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationAdaptivePolicySettingsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationAdaptivePolicySettingsRequestBody:
    enabled_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledNetworks') }})
    

@dataclass
class UpdateOrganizationAdaptivePolicySettingsRequest:
    path_params: UpdateOrganizationAdaptivePolicySettingsPathParams = field()
    request: Optional[UpdateOrganizationAdaptivePolicySettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationAdaptivePolicySettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_adaptive_policy_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
