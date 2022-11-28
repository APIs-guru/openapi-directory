import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesDeletePathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesDeleteSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesDeleteSecurityOption1;
    option2?: ServicemanagementServicesDeleteSecurityOption2;
}
export declare class ServicemanagementServicesDeleteRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesDeletePathParams;
    queryParams: ServicemanagementServicesDeleteQueryParams;
    security: ServicemanagementServicesDeleteSecurity;
}
export declare class ServicemanagementServicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
