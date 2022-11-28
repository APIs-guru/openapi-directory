import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum {
    Unique = "Unique",
    NonUnique = "Non-unique"
}
export declare class UpdateNetworkWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
    advertisingEnabled?: boolean;
    major?: number;
    majorMinorAssignmentMode?: UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
    minor?: number;
    scanningEnabled?: boolean;
    uuid?: string;
}
export declare class UpdateNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessBluetoothSettingsPathParams;
    request?: UpdateNetworkWirelessBluetoothSettingsRequestBody;
}
export declare class UpdateNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
