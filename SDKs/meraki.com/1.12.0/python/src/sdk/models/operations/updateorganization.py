from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationRequestBodyAPI:
    r"""UpdateOrganizationRequestBodyAPI
    API-specific settings
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationRequestBody:
    api: Optional[UpdateOrganizationRequestBodyAPI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class UpdateOrganizationRequest:
    path_params: UpdateOrganizationPathParams = field()
    request: Optional[UpdateOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
