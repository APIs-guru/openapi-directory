from dataclasses import dataclass, field



@dataclass
class DeleteNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = field(metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkMerakiAuthUserRequest:
    path_params: DeleteNetworkMerakiAuthUserPathParams = field()
    

@dataclass
class DeleteNetworkMerakiAuthUserResponse:
    content_type: str = field()
    status_code: int = field()
    
