from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateGlobalAuthModulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGlobalAuthModuleSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateGlobalAuthModuleRequest:
    path_params: UpdateGlobalAuthModulePathParams = field()
    security: UpdateGlobalAuthModuleSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGlobalAuthModuleResponse:
    content_type: str = field()
    status_code: int = field()
    update_global_auth_module_200_application_json_one_of: Optional[Any] = field(default=None)
    
