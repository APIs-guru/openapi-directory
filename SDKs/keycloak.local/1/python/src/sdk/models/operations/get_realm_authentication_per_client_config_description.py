from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmAuthenticationPerClientConfigDescriptionPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationPerClientConfigDescriptionRequest:
    path_params: GetRealmAuthenticationPerClientConfigDescriptionPathParams = field()
    

@dataclass
class GetRealmAuthenticationPerClientConfigDescriptionResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_authentication_per_client_config_description_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
