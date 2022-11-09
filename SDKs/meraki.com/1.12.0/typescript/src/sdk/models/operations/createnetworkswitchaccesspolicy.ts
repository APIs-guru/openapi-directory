import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x"
,    MacAuthenticationBypass = "MAC authentication bypass"
,    HybridAuthentication = "Hybrid authentication"
}

export enum CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SingleHost = "Single-Host"
,    MultiDomain = "Multi-Domain"
,    MultiHost = "Multi-Host"
,    MultiAuth = "Multi-Auth"
}


// CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
/** 
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
export class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataVlanId" })
  dataVlanId?: number;

  @Metadata({ data: "json, name=suspendPortBounce" })
  suspendPortBounce?: boolean;

  @Metadata({ data: "json, name=voiceVlanId" })
  voiceVlanId?: number;
}


// CreateNetworkSwitchAccessPolicyRequestBodyRadius
/** 
 * Object for RADIUS Settings
**/
export class CreateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
  @Metadata({ data: "json, name=criticalAuth" })
  criticalAuth?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}


export class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}


export class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}


export class CreateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;

  @Metadata({ data: "json, name=guestVlanId" })
  guestVlanId?: number;

  @Metadata({ data: "json, name=hostMode" })
  hostMode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;

  @Metadata({ data: "json, name=increaseAccessSpeed" })
  increaseAccessSpeed?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=radius" })
  radius?: CreateNetworkSwitchAccessPolicyRequestBodyRadius;

  @Metadata({ data: "json, name=radiusAccountingEnabled" })
  radiusAccountingEnabled: boolean;

  @Metadata({ data: "json, name=radiusAccountingServers", elemType: operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers })
  radiusAccountingServers?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];

  @Metadata({ data: "json, name=radiusCoaSupportEnabled" })
  radiusCoaSupportEnabled: boolean;

  @Metadata({ data: "json, name=radiusGroupAttribute" })
  radiusGroupAttribute?: string;

  @Metadata({ data: "json, name=radiusServers", elemType: operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers })
  radiusServers: CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];

  @Metadata({ data: "json, name=radiusTestingEnabled" })
  radiusTestingEnabled: boolean;

  @Metadata({ data: "json, name=urlRedirectWalledGardenEnabled" })
  urlRedirectWalledGardenEnabled: boolean;

  @Metadata({ data: "json, name=urlRedirectWalledGardenRanges" })
  urlRedirectWalledGardenRanges?: string[];

  @Metadata({ data: "json, name=voiceVlanClients" })
  voiceVlanClients?: boolean;
}


export class CreateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchAccessPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchAccessPolicyRequestBody;
}


export class CreateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchAccessPolicy201ApplicationJsonObject?: Map<string, any>;
}
