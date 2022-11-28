import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum {
    Combined = "combined",
    Redundant = "redundant",
    UseNetworkSetting = "useNetworkSetting"
}


export class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=powerType" })
  powerType: UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial: string;
}


export class UpdateNetworkSwitchSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=powerExceptions", elemType: UpdateNetworkSwitchSettingsRequestBodyPowerExceptions })
  powerExceptions?: UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[];

  @SpeakeasyMetadata({ data: "json, name=useCombinedPower" })
  useCombinedPower?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}


export class UpdateNetworkSwitchSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchSettingsRequestBody;
}


export class UpdateNetworkSwitchSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchSettings200ApplicationJsonObject?: Map<string, any>;
}
