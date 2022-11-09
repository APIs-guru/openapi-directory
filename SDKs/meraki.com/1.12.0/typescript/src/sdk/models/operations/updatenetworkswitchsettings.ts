import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum {
    Combined = "combined"
,    Redundant = "redundant"
,    UseNetworkSetting = "useNetworkSetting"
}


export class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=powerType" })
  powerType: UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;

  @Metadata({ data: "json, name=serial" })
  serial: string;
}


export class UpdateNetworkSwitchSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=powerExceptions", elemType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions })
  powerExceptions?: UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[];

  @Metadata({ data: "json, name=useCombinedPower" })
  useCombinedPower?: boolean;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}


export class UpdateNetworkSwitchSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchSettingsRequestBody;
}


export class UpdateNetworkSwitchSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchSettings200ApplicationJsonObject?: Map<string, any>;
}
