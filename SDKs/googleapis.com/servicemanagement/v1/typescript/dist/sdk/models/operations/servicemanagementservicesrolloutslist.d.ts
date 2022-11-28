import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesRolloutsListPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesRolloutsListQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesRolloutsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsListSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesRolloutsListSecurityOption1;
    option2?: ServicemanagementServicesRolloutsListSecurityOption2;
    option3?: ServicemanagementServicesRolloutsListSecurityOption3;
    option4?: ServicemanagementServicesRolloutsListSecurityOption4;
}
export declare class ServicemanagementServicesRolloutsListRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesRolloutsListPathParams;
    queryParams: ServicemanagementServicesRolloutsListQueryParams;
    security: ServicemanagementServicesRolloutsListSecurity;
}
export declare class ServicemanagementServicesRolloutsListResponse extends SpeakeasyBase {
    contentType: string;
    listServiceRolloutsResponse?: shared.ListServiceRolloutsResponse;
    statusCode: number;
}
