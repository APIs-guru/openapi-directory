import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum {
    One = "1",
    Two = "2"
}
export declare enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum {
    Prfsha256 = "prfsha256",
    Prfsha1 = "prfsha1",
    Prfmd5 = "prfmd5",
    Default = "default"
}
/**
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
**/
export declare class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies extends SpeakeasyBase {
    childAuthAlgo?: string[];
    childCipherAlgo?: string[];
    childLifetime?: number;
    childPfsGroup?: string[];
    ikeAuthAlgo?: string[];
    ikeCipherAlgo?: string[];
    ikeDiffieHellmanGroup?: string[];
    ikeLifetime?: number;
    ikePrfAlgo?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[];
}
export declare class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers extends SpeakeasyBase {
    ikeVersion?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum;
    ipsecPolicies?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies;
    ipsecPoliciesPreset?: string;
    name: string;
    networkTags?: string[];
    privateSubnets: string[];
    publicIp: string;
    remoteId?: string;
    secret: string;
}
export declare class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody extends SpeakeasyBase {
    peers: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers[];
}
export declare class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams;
    request: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody;
}
export declare class UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject?: Map<string, any>;
}
