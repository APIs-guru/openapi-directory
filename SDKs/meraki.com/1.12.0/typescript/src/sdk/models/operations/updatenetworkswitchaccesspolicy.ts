import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyNumber" })
  accessPolicyNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x"
,    MacAuthenticationBypass = "MAC authentication bypass"
,    HybridAuthentication = "Hybrid authentication"
}

export enum UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SingleHost = "Single-Host"
,    MultiDomain = "Multi-Domain"
,    MultiHost = "Multi-Host"
,    MultiAuth = "Multi-Auth"
}


// UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
/** 
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
export class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataVlanId" })
  dataVlanId?: number;

  @Metadata({ data: "json, name=suspendPortBounce" })
  suspendPortBounce?: boolean;

  @Metadata({ data: "json, name=voiceVlanId" })
  voiceVlanId?: number;
}


// UpdateNetworkSwitchAccessPolicyRequestBodyRadius
/** 
 * Object for RADIUS Settings
**/
export class UpdateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
  @Metadata({ data: "json, name=criticalAuth" })
  criticalAuth?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}


export class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}


export class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}


export class UpdateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;

  @Metadata({ data: "json, name=guestVlanId" })
  guestVlanId?: number;

  @Metadata({ data: "json, name=hostMode" })
  hostMode?: UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;

  @Metadata({ data: "json, name=increaseAccessSpeed" })
  increaseAccessSpeed?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=radius" })
  radius?: UpdateNetworkSwitchAccessPolicyRequestBodyRadius;

  @Metadata({ data: "json, name=radiusAccountingEnabled" })
  radiusAccountingEnabled?: boolean;

  @Metadata({ data: "json, name=radiusAccountingServers", elemType: operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers })
  radiusAccountingServers?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];

  @Metadata({ data: "json, name=radiusCoaSupportEnabled" })
  radiusCoaSupportEnabled?: boolean;

  @Metadata({ data: "json, name=radiusGroupAttribute" })
  radiusGroupAttribute?: string;

  @Metadata({ data: "json, name=radiusServers", elemType: operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers })
  radiusServers?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];

  @Metadata({ data: "json, name=radiusTestingEnabled" })
  radiusTestingEnabled?: boolean;

  @Metadata({ data: "json, name=urlRedirectWalledGardenEnabled" })
  urlRedirectWalledGardenEnabled?: boolean;

  @Metadata({ data: "json, name=urlRedirectWalledGardenRanges" })
  urlRedirectWalledGardenRanges?: string[];

  @Metadata({ data: "json, name=voiceVlanClients" })
  voiceVlanClients?: boolean;
}


export class UpdateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchAccessPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchAccessPolicyRequestBody;
}


export class UpdateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchAccessPolicy200ApplicationJsonObject?: Map<string, any>;
}
