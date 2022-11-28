import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeTrustedDevicePathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class RevokeTrustedDeviceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RevokeTrustedDeviceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RevokeTrustedDeviceRequest extends SpeakeasyBase {
    pathParams: RevokeTrustedDevicePathParams;
    security: RevokeTrustedDeviceSecurity;
}
export declare class RevokeTrustedDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    revokeTrustedDevice200ApplicationJsonObject?: Map<string, any>;
    revokeTrustedDeviceDefaultApplicationJsonObject?: RevokeTrustedDeviceDefaultApplicationJson;
}
