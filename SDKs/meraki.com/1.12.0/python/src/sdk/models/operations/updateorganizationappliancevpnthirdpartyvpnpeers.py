from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum(str, Enum):
    ONE = "1"
    TWO = "2"

class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum(str, Enum):
    PRFSHA256 = "prfsha256"
    PRFSHA1 = "prfsha1"
    PRFMD5 = "prfmd5"
    DEFAULT = "default"


@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies:
    child_auth_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childAuthAlgo' }})
    child_cipher_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childCipherAlgo' }})
    child_lifetime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childLifetime' }})
    child_pfs_group: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPfsGroup' }})
    ike_auth_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ikeAuthAlgo' }})
    ike_cipher_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ikeCipherAlgo' }})
    ike_diffie_hellman_group: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ikeDiffieHellmanGroup' }})
    ike_lifetime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ikeLifetime' }})
    ike_prf_algo: Optional[List[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ikePrfAlgo' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers:
    ike_version: Optional[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ikeVersion' }})
    ipsec_policies: Optional[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipsecPolicies' }})
    ipsec_policies_preset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipsecPoliciesPreset' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    private_subnets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateSubnets' }})
    public_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIp' }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody:
    peers: List[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peers' }})
    

@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest:
    path_params: UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams = field(default=None)
    request: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
