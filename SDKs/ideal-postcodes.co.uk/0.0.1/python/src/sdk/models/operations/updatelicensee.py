from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLicenseePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class UpdateLicenseeRequest:
    path_params: UpdateLicenseePathParams = field()
    request: shared.UpdateLicenseeSchema = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLicenseeSecurity = field()
    

@dataclass
class UpdateLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    licensee_response_schema: Optional[shared.LicenseeResponseSchema] = field(default=None)
    
