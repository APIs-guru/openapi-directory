import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConfigsListPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicemanagementServicesConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsListSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConfigsListSecurityOption1;
    option2?: ServicemanagementServicesConfigsListSecurityOption2;
    option3?: ServicemanagementServicesConfigsListSecurityOption3;
    option4?: ServicemanagementServicesConfigsListSecurityOption4;
}
export declare class ServicemanagementServicesConfigsListRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConfigsListPathParams;
    queryParams: ServicemanagementServicesConfigsListQueryParams;
    security: ServicemanagementServicesConfigsListSecurity;
}
export declare class ServicemanagementServicesConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listServiceConfigsResponse?: shared.ListServiceConfigsResponse;
    statusCode: number;
}
