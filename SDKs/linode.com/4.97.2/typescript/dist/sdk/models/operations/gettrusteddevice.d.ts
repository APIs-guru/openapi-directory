import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrustedDevicePathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class GetTrustedDeviceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTrustedDeviceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTrustedDeviceRequest extends SpeakeasyBase {
    pathParams: GetTrustedDevicePathParams;
    security: GetTrustedDeviceSecurity;
}
export declare class GetTrustedDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trustedDevice?: shared.TrustedDevice;
    getTrustedDeviceDefaultApplicationJsonObject?: GetTrustedDeviceDefaultApplicationJson;
}
