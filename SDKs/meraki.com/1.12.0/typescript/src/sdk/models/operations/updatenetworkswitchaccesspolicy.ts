import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyNumber" })
  accessPolicyNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    MacAuthenticationBypass = "MAC authentication bypass",
    HybridAuthentication = "Hybrid authentication"
}

export enum UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SingleHost = "Single-Host",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    MultiAuth = "Multi-Auth"
}


// UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
/** 
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
export class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataVlanId" })
  dataVlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=suspendPortBounce" })
  suspendPortBounce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voiceVlanId" })
  voiceVlanId?: number;
}


// UpdateNetworkSwitchAccessPolicyRequestBodyRadius
/** 
 * Object for RADIUS Settings
**/
export class UpdateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criticalAuth" })
  criticalAuth?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}


export class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}


export class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}


export class UpdateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=guestVlanId" })
  guestVlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=hostMode" })
  hostMode?: UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;

  @SpeakeasyMetadata({ data: "json, name=increaseAccessSpeed" })
  increaseAccessSpeed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: UpdateNetworkSwitchAccessPolicyRequestBodyRadius;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingEnabled" })
  radiusAccountingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingServers", elemType: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers })
  radiusAccountingServers?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];

  @SpeakeasyMetadata({ data: "json, name=radiusCoaSupportEnabled" })
  radiusCoaSupportEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusGroupAttribute" })
  radiusGroupAttribute?: string;

  @SpeakeasyMetadata({ data: "json, name=radiusServers", elemType: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers })
  radiusServers?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];

  @SpeakeasyMetadata({ data: "json, name=radiusTestingEnabled" })
  radiusTestingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenEnabled" })
  urlRedirectWalledGardenEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenRanges" })
  urlRedirectWalledGardenRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=voiceVlanClients" })
  voiceVlanClients?: boolean;
}


export class UpdateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchAccessPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchAccessPolicyRequestBody;
}


export class UpdateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchAccessPolicy200ApplicationJsonObject?: Map<string, any>;
}
