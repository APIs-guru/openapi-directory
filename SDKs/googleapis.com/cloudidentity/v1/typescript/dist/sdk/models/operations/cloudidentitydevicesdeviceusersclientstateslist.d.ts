import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityDevicesDeviceUsersClientStatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityDevicesDeviceUsersClientStatesListQueryParams extends SpeakeasyBase {
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
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesDeviceUsersClientStatesListSecurity extends SpeakeasyBase {
    option1?: CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1;
    option2?: CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2;
}
export declare class CloudidentityDevicesDeviceUsersClientStatesListRequest extends SpeakeasyBase {
    pathParams: CloudidentityDevicesDeviceUsersClientStatesListPathParams;
    queryParams: CloudidentityDevicesDeviceUsersClientStatesListQueryParams;
    security: CloudidentityDevicesDeviceUsersClientStatesListSecurity;
}
export declare class CloudidentityDevicesDeviceUsersClientStatesListResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsCloudidentityDevicesV1ListClientStatesResponse?: shared.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse;
    statusCode: number;
}
