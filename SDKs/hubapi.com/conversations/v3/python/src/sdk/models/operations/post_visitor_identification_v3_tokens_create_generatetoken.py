from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest:
    request: shared.IdentificationTokenGenerationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity = field()
    

@dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    identification_token_response: Optional[shared.IdentificationTokenResponse] = field(default=None)
    
