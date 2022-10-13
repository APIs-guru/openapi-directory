from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity:
    option1: Optional[PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostVisitorIdentificationV3TokensCreateGenerateTokenSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest:
    request: shared.IdentificationTokenGenerationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity = field(default=None)
    

@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    identification_token_response: Optional[shared.IdentificationTokenResponse] = field(default=None)
    status_code: int = field(default=None)
    
