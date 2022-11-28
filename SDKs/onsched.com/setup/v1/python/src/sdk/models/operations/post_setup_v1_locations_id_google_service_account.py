from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsIDGoogleServiceAccountPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1LocationsIDGoogleServiceAccountRequests:
    google_service_account_creds: Optional[shared.GoogleServiceAccountCreds] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    google_service_account_creds1: Optional[shared.GoogleServiceAccountCreds] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    google_service_account_creds2: Optional[shared.GoogleServiceAccountCreds] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    google_service_account_creds3: Optional[shared.GoogleServiceAccountCreds] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsIDGoogleServiceAccountRequest:
    path_params: PostSetupV1LocationsIDGoogleServiceAccountPathParams = field()
    request: Optional[PostSetupV1LocationsIDGoogleServiceAccountRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsIDGoogleServiceAccountResponse:
    content_type: str = field()
    status_code: int = field()
    google_service_account_creds: Optional[shared.GoogleServiceAccountCreds] = field(default=None)
    
