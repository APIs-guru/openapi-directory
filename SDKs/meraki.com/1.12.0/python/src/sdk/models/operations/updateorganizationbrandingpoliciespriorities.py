from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody:
    branding_policy_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingPolicyIds') }})
    

@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesRequest:
    path_params: UpdateOrganizationBrandingPoliciesPrioritiesPathParams = field()
    request: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_branding_policies_priorities_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
