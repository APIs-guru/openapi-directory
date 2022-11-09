import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SmartdevicemanagementEnterprisesDevicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SmartdevicemanagementEnterprisesDevicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SmartdevicemanagementEnterprisesDevicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SmartdevicemanagementEnterprisesDevicesListRequest extends SpeakeasyBase {
    pathParams: SmartdevicemanagementEnterprisesDevicesListPathParams;
    queryParams: SmartdevicemanagementEnterprisesDevicesListQueryParams;
    security: SmartdevicemanagementEnterprisesDevicesListSecurity;
}
export declare class SmartdevicemanagementEnterprisesDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    googleHomeEnterpriseSdmV1ListDevicesResponse?: shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse;
    statusCode: number;
}
