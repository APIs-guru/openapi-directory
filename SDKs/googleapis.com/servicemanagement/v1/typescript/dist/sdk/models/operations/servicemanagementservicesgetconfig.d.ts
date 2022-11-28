import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesGetConfigPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare enum ServicemanagementServicesGetConfigViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServicemanagementServicesGetConfigQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    configId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: ServicemanagementServicesGetConfigViewEnum;
}
export declare class ServicemanagementServicesGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGetConfigSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesGetConfigSecurityOption1;
    option2?: ServicemanagementServicesGetConfigSecurityOption2;
    option3?: ServicemanagementServicesGetConfigSecurityOption3;
    option4?: ServicemanagementServicesGetConfigSecurityOption4;
}
export declare class ServicemanagementServicesGetConfigRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesGetConfigPathParams;
    queryParams: ServicemanagementServicesGetConfigQueryParams;
    security: ServicemanagementServicesGetConfigSecurity;
}
export declare class ServicemanagementServicesGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
