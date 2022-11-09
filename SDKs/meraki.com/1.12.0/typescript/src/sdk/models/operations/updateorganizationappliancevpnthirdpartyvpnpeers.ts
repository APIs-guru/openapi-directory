import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum {
    One = "1"
,    Two = "2"
}

export enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum {
    Prfsha256 = "prfsha256"
,    Prfsha1 = "prfsha1"
,    Prfmd5 = "prfmd5"
,    Default = "default"
}


// UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies
/** 
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
**/
export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=childAuthAlgo" })
  childAuthAlgo?: string[];

  @Metadata({ data: "json, name=childCipherAlgo" })
  childCipherAlgo?: string[];

  @Metadata({ data: "json, name=childLifetime" })
  childLifetime?: number;

  @Metadata({ data: "json, name=childPfsGroup" })
  childPfsGroup?: string[];

  @Metadata({ data: "json, name=ikeAuthAlgo" })
  ikeAuthAlgo?: string[];

  @Metadata({ data: "json, name=ikeCipherAlgo" })
  ikeCipherAlgo?: string[];

  @Metadata({ data: "json, name=ikeDiffieHellmanGroup" })
  ikeDiffieHellmanGroup?: string[];

  @Metadata({ data: "json, name=ikeLifetime" })
  ikeLifetime?: number;

  @Metadata({ data: "json, name=ikePrfAlgo" })
  ikePrfAlgo?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[];
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers extends SpeakeasyBase {
  @Metadata({ data: "json, name=ikeVersion" })
  ikeVersion?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum;

  @Metadata({ data: "json, name=ipsecPolicies" })
  ipsecPolicies?: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies;

  @Metadata({ data: "json, name=ipsecPoliciesPreset" })
  ipsecPoliciesPreset?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=privateSubnets" })
  privateSubnets: string[];

  @Metadata({ data: "json, name=publicIp" })
  publicIp: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=peers", elemType: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers })
  peers: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers[];
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody;
}


export class UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject?: Map<string, any>;
}
