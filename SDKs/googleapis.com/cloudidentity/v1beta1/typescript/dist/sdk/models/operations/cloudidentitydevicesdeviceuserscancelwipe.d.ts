import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityDevicesDeviceUsersCancelWipePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityDevicesDeviceUsersCancelWipeQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityDevicesDeviceUsersCancelWipeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersCancelWipeRequest extends SpeakeasyBase {
    pathParams: CloudidentityDevicesDeviceUsersCancelWipePathParams;
    queryParams: CloudidentityDevicesDeviceUsersCancelWipeQueryParams;
    request?: Map<string, any>;
    security: CloudidentityDevicesDeviceUsersCancelWipeSecurity;
}
export declare class CloudidentityDevicesDeviceUsersCancelWipeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
