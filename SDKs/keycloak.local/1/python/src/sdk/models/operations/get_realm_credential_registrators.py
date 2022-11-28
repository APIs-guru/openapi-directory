from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetRealmCredentialRegistratorsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmCredentialRegistratorsRequest:
    path_params: GetRealmCredentialRegistratorsPathParams = field()
    

@dataclass
class GetRealmCredentialRegistratorsResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_credential_registrators_2_xx_application_json_strings: Optional[List[str]] = field(default=None)
    
