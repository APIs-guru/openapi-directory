import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetDevices200ApplicationJson extends SpeakeasyBase {
    data?: shared.TrustedDevice[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetDevicesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetDevicesRequest extends SpeakeasyBase {
    security: GetDevicesSecurity;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDevices200ApplicationJsonObject?: GetDevices200ApplicationJson;
    getDevicesDefaultApplicationJsonObject?: GetDevicesDefaultApplicationJson;
}
