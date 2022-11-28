import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum {
    One = "1",
    Two = "2"
}

export enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum {
    Prfsha256 = "prfsha256",
    Prfsha1 = "prfsha1",
    Prfmd5 = "prfmd5",
    Default = "default"
}


// UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies
/** 
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
**/
export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childAuthAlgo" })
  childAuthAlgo?: string[];

  @SpeakeasyMetadata({ data: "json, name=childCipherAlgo" })
  childCipherAlgo?: string[];

  @SpeakeasyMetadata({ data: "json, name=childLifetime" })
  childLifetime?: number;

  @SpeakeasyMetadata({ data: "json, name=childPfsGroup" })
  childPfsGroup?: string[];

  @SpeakeasyMetadata({ data: "json, name=ikeAuthAlgo" })
  ikeAuthAlgo?: string[];

  @SpeakeasyMetadata({ data: "json, name=ikeCipherAlgo" })
  ikeCipherAlgo?: string[];

  @SpeakeasyMetadata({ data: "json, name=ikeDiffieHellmanGroup" })
  ikeDiffieHellmanGroup?: string[];

  @SpeakeasyMetadata({ data: "json, name=ikeLifetime" })
  ikeLifetime?: number;

  @SpeakeasyMetadata({ data: "json, name=ikePrfAlgo" })
  ikePrfAlgo?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[];
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ikeVersion" })
  ikeVersion?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=ipsecPolicies" })
  ipsecPolicies?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies;

  @SpeakeasyMetadata({ data: "json, name=ipsecPoliciesPreset" })
  ipsecPoliciesPreset?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=privateSubnets" })
  privateSubnets: string[];

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=peers", elemType: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers })
  peers: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers[];
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody;
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject?: Map<string, any>;
}
