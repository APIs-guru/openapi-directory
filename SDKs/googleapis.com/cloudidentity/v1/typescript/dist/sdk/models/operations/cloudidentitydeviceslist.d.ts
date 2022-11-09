import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CloudidentityDevicesListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    CompanyInventory = "COMPANY_INVENTORY",
    UserAssignedDevices = "USER_ASSIGNED_DEVICES"
}
export declare class CloudidentityDevicesListQueryParams extends SpeakeasyBase {
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
    view?: CloudidentityDevicesListViewEnum;
}
export declare class CloudidentityDevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityDevicesListSecurity extends SpeakeasyBase {
    option1?: CloudidentityDevicesListSecurityOption1;
    option2?: CloudidentityDevicesListSecurityOption2;
}
export declare class CloudidentityDevicesListRequest extends SpeakeasyBase {
    queryParams: CloudidentityDevicesListQueryParams;
    security: CloudidentityDevicesListSecurity;
}
export declare class CloudidentityDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsCloudidentityDevicesV1ListDevicesResponse?: shared.GoogleAppsCloudidentityDevicesV1ListDevicesResponse;
    statusCode: number;
}
