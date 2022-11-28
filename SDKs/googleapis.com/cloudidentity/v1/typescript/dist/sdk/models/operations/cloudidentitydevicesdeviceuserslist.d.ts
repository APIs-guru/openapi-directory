import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityDevicesDeviceUsersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityDevicesDeviceUsersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customer?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityDevicesDeviceUsersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersListSecurity extends SpeakeasyBase {
    option1?: CloudidentityDevicesDeviceUsersListSecurityOption1;
    option2?: CloudidentityDevicesDeviceUsersListSecurityOption2;
}
export declare class CloudidentityDevicesDeviceUsersListRequest extends SpeakeasyBase {
    pathParams: CloudidentityDevicesDeviceUsersListPathParams;
    queryParams: CloudidentityDevicesDeviceUsersListQueryParams;
    security: CloudidentityDevicesDeviceUsersListSecurity;
}
export declare class CloudidentityDevicesDeviceUsersListResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsCloudidentityDevicesV1ListDeviceUsersResponse?: shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse;
    statusCode: number;
}
