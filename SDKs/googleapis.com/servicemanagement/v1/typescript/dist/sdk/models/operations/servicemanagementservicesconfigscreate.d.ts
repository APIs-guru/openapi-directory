import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConfigsCreatePathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsCreateSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConfigsCreateSecurityOption1;
    option2?: ServicemanagementServicesConfigsCreateSecurityOption2;
}
export declare class ServicemanagementServicesConfigsCreateRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConfigsCreatePathParams;
    queryParams: ServicemanagementServicesConfigsCreateQueryParams;
    request?: shared.Service;
    security: ServicemanagementServicesConfigsCreateSecurity;
}
export declare class ServicemanagementServicesConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
