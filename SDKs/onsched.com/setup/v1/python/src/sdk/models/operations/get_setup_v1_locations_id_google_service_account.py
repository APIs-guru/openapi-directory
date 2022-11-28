from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1LocationsIDGoogleServiceAccountPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1LocationsIDGoogleServiceAccountRequest:
    path_params: GetSetupV1LocationsIDGoogleServiceAccountPathParams = field()
    

@dataclass
class GetSetupV1LocationsIDGoogleServiceAccountResponse:
    content_type: str = field()
    status_code: int = field()
    google_service_account_creds: Optional[shared.GoogleServiceAccountCreds] = field(default=None)
    
