import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum {
    Unique = "Unique",
    NonUnique = "Non-unique"
}


export class UpdateNetworkWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisingEnabled" })
  advertisingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=major" })
  major?: number;

  @SpeakeasyMetadata({ data: "json, name=majorMinorAssignmentMode" })
  majorMinorAssignmentMode?: UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;

  @SpeakeasyMetadata({ data: "json, name=minor" })
  minor?: number;

  @SpeakeasyMetadata({ data: "json, name=scanningEnabled" })
  scanningEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class UpdateNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessBluetoothSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessBluetoothSettingsRequestBody;
}


export class UpdateNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
