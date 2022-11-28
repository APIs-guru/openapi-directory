from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from sdk.models import shared


@dataclass
class UpdateCallPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateCallRequest:
    path_params: UpdateCallPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCallSecurity = field()
    

@dataclass
class UpdateCallResponse:
    content_type: str = field()
    status_code: int = field()
    
