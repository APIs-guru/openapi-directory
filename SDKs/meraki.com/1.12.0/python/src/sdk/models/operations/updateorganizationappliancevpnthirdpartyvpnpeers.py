from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
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
    r"""UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies
    Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
    """
    
    child_auth_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childAuthAlgo') }})
    child_cipher_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childCipherAlgo') }})
    child_lifetime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childLifetime') }})
    child_pfs_group: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPfsGroup') }})
    ike_auth_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeAuthAlgo') }})
    ike_cipher_algo: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeCipherAlgo') }})
    ike_diffie_hellman_group: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeDiffieHellmanGroup') }})
    ike_lifetime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeLifetime') }})
    ike_prf_algo: Optional[List[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikePrfAlgo') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateSubnets') }})
    public_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    ike_version: Optional[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeVersion') }})
    ipsec_policies: Optional[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipsecPolicies') }})
    ipsec_policies_preset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipsecPoliciesPreset') }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody:
    peers: List[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('peers') }})
    

@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest:
    path_params: UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams = field()
    request: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
