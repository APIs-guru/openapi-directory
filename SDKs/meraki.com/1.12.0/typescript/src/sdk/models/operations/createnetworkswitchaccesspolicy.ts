import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    MacAuthenticationBypass = "MAC authentication bypass",
    HybridAuthentication = "Hybrid authentication"
}

export enum CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SingleHost = "Single-Host",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    MultiAuth = "Multi-Auth"
}


// CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
/** 
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
export class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataVlanId" })
  dataVlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=suspendPortBounce" })
  suspendPortBounce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voiceVlanId" })
  voiceVlanId?: number;
}


// CreateNetworkSwitchAccessPolicyRequestBodyRadius
/** 
 * Object for RADIUS Settings
**/
export class CreateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criticalAuth" })
  criticalAuth?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}


export class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}


export class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}


export class CreateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=guestVlanId" })
  guestVlanId?: number;

  @SpeakeasyMetadata({ data: "json, name=hostMode" })
  hostMode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;

  @SpeakeasyMetadata({ data: "json, name=increaseAccessSpeed" })
  increaseAccessSpeed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: CreateNetworkSwitchAccessPolicyRequestBodyRadius;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingEnabled" })
  radiusAccountingEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusAccountingServers", elemType: CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers })
  radiusAccountingServers?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];

  @SpeakeasyMetadata({ data: "json, name=radiusCoaSupportEnabled" })
  radiusCoaSupportEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=radiusGroupAttribute" })
  radiusGroupAttribute?: string;

  @SpeakeasyMetadata({ data: "json, name=radiusServers", elemType: CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers })
  radiusServers: CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];

  @SpeakeasyMetadata({ data: "json, name=radiusTestingEnabled" })
  radiusTestingEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenEnabled" })
  urlRedirectWalledGardenEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenRanges" })
  urlRedirectWalledGardenRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=voiceVlanClients" })
  voiceVlanClients?: boolean;
}


export class CreateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchAccessPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchAccessPolicyRequestBody;
}


export class CreateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchAccessPolicy201ApplicationJsonObject?: Map<string, any>;
}
