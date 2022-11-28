from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGlobalJwtVerifierPathParams:
    verifier_id: str = field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateGlobalJwtVerifierRequest:
    path_params: UpdateGlobalJwtVerifierPathParams = field()
    security: UpdateGlobalJwtVerifierSecurity = field()
    request: Optional[shared.GlobalJwtVerifier] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGlobalJwtVerifierResponse:
    content_type: str = field()
    status_code: int = field()
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    
