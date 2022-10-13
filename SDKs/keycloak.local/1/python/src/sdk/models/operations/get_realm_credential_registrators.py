from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetRealmCredentialRegistratorsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmCredentialRegistratorsRequest:
    path_params: GetRealmCredentialRegistratorsPathParams = field(default=None)
    

@dataclass
class GetRealmCredentialRegistratorsResponse:
    content_type: str = field(default=None)
    get_realm_credential_registrators_2_xx_application_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
