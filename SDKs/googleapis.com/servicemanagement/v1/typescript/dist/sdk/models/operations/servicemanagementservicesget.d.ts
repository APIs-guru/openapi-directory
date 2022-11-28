import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesGetPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesGetQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesGetSecurityOption1;
    option2?: ServicemanagementServicesGetSecurityOption2;
    option3?: ServicemanagementServicesGetSecurityOption3;
    option4?: ServicemanagementServicesGetSecurityOption4;
}
export declare class ServicemanagementServicesGetRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesGetPathParams;
    queryParams: ServicemanagementServicesGetQueryParams;
    security: ServicemanagementServicesGetSecurity;
}
export declare class ServicemanagementServicesGetResponse extends SpeakeasyBase {
    contentType: string;
    managedService?: shared.ManagedService;
    statusCode: number;
}
