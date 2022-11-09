import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum {
    Unique = "Unique"
,    NonUnique = "Non-unique"
}


export class UpdateNetworkWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisingEnabled" })
  advertisingEnabled?: boolean;

  @Metadata({ data: "json, name=major" })
  major?: number;

  @Metadata({ data: "json, name=majorMinorAssignmentMode" })
  majorMinorAssignmentMode?: UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;

  @Metadata({ data: "json, name=minor" })
  minor?: number;

  @Metadata({ data: "json, name=scanningEnabled" })
  scanningEnabled?: boolean;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class UpdateNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessBluetoothSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessBluetoothSettingsRequestBody;
}


export class UpdateNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
