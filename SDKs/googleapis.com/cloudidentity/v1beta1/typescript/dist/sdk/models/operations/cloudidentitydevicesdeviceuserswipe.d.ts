import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityDevicesDeviceUsersWipePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityDevicesDeviceUsersWipeQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityDevicesDeviceUsersWipeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersWipeRequest extends SpeakeasyBase {
    pathParams: CloudidentityDevicesDeviceUsersWipePathParams;
    queryParams: CloudidentityDevicesDeviceUsersWipeQueryParams;
    request?: Map<string, any>;
    security: CloudidentityDevicesDeviceUsersWipeSecurity;
}
export declare class CloudidentityDevicesDeviceUsersWipeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
