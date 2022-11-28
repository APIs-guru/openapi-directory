import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckinNetworkSmDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CheckinNetworkSmDevicesRequestBody extends SpeakeasyBase {
    ids?: string[];
    scope?: string[];
    serials?: string[];
    wifiMacs?: string[];
}
export declare class CheckinNetworkSmDevicesRequest extends SpeakeasyBase {
    pathParams: CheckinNetworkSmDevicesPathParams;
    request?: CheckinNetworkSmDevicesRequestBody;
}
export declare class CheckinNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkinNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
