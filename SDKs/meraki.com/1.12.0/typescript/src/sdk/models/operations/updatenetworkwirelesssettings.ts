import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum {
    MinimizeUpgradeTime = "minimizeUpgradeTime",
    MinimizeClientDowntime = "minimizeClientDowntime"
}


export class UpdateNetworkWirelessSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipv6BridgeEnabled" })
  ipv6BridgeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ledLightsOn" })
  ledLightsOn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locationAnalyticsEnabled" })
  locationAnalyticsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meshingEnabled" })
  meshingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upgradeStrategy" })
  upgradeStrategy?: UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
}


export class UpdateNetworkWirelessSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSettingsRequestBody;
}


export class UpdateNetworkWirelessSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSettings200ApplicationJsonObject?: Map<string, any>;
}
