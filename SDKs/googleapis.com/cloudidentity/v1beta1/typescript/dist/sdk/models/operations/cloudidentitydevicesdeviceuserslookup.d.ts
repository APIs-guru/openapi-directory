import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityDevicesDeviceUsersLookupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityDevicesDeviceUsersLookupQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    androidId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rawResourceId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userId?: string;
}
export declare class CloudidentityDevicesDeviceUsersLookupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersLookupRequest extends SpeakeasyBase {
    pathParams: CloudidentityDevicesDeviceUsersLookupPathParams;
    queryParams: CloudidentityDevicesDeviceUsersLookupQueryParams;
    security: CloudidentityDevicesDeviceUsersLookupSecurity;
}
export declare class CloudidentityDevicesDeviceUsersLookupResponse extends SpeakeasyBase {
    contentType: string;
    lookupSelfDeviceUsersResponse?: shared.LookupSelfDeviceUsersResponse;
    statusCode: number;
}
