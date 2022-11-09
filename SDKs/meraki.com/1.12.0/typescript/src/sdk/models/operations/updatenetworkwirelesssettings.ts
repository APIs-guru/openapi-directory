import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum {
    MinimizeUpgradeTime = "minimizeUpgradeTime"
,    MinimizeClientDowntime = "minimizeClientDowntime"
}


export class UpdateNetworkWirelessSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipv6BridgeEnabled" })
  ipv6BridgeEnabled?: boolean;

  @Metadata({ data: "json, name=ledLightsOn" })
  ledLightsOn?: boolean;

  @Metadata({ data: "json, name=locationAnalyticsEnabled" })
  locationAnalyticsEnabled?: boolean;

  @Metadata({ data: "json, name=meshingEnabled" })
  meshingEnabled?: boolean;

  @Metadata({ data: "json, name=upgradeStrategy" })
  upgradeStrategy?: UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
}


export class UpdateNetworkWirelessSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSettingsRequestBody;
}


export class UpdateNetworkWirelessSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSettings200ApplicationJsonObject?: Map<string, any>;
}
