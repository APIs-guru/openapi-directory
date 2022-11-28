from dataclasses import dataclass, field



@dataclass
class DeleteNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = field(metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkWirelessSsidIdentityPskRequest:
    path_params: DeleteNetworkWirelessSsidIdentityPskPathParams = field()
    

@dataclass
class DeleteNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field()
    status_code: int = field()
    
