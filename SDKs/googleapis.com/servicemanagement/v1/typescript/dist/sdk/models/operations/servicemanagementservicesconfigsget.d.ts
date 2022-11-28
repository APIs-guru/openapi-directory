import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConfigsGetPathParams extends SpeakeasyBase {
    configId: string;
    serviceName: string;
}
export declare enum ServicemanagementServicesConfigsGetViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServicemanagementServicesConfigsGetQueryParams extends SpeakeasyBase {
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
    view?: ServicemanagementServicesConfigsGetViewEnum;
}
export declare class ServicemanagementServicesConfigsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsGetSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConfigsGetSecurityOption1;
    option2?: ServicemanagementServicesConfigsGetSecurityOption2;
    option3?: ServicemanagementServicesConfigsGetSecurityOption3;
    option4?: ServicemanagementServicesConfigsGetSecurityOption4;
}
export declare class ServicemanagementServicesConfigsGetRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConfigsGetPathParams;
    queryParams: ServicemanagementServicesConfigsGetQueryParams;
    security: ServicemanagementServicesConfigsGetSecurity;
}
export declare class ServicemanagementServicesConfigsGetResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
