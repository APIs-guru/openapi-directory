import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConfigsSubmitPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesConfigsSubmitQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesConfigsSubmitSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsSubmitSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConfigsSubmitSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConfigsSubmitSecurityOption1;
    option2?: ServicemanagementServicesConfigsSubmitSecurityOption2;
}
export declare class ServicemanagementServicesConfigsSubmitRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConfigsSubmitPathParams;
    queryParams: ServicemanagementServicesConfigsSubmitQueryParams;
    request?: shared.SubmitConfigSourceRequest;
    security: ServicemanagementServicesConfigsSubmitSecurity;
}
export declare class ServicemanagementServicesConfigsSubmitResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
