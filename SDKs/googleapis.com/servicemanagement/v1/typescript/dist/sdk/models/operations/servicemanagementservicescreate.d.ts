import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesCreateQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesCreateSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesCreateSecurityOption1;
    option2?: ServicemanagementServicesCreateSecurityOption2;
}
export declare class ServicemanagementServicesCreateRequest extends SpeakeasyBase {
    queryParams: ServicemanagementServicesCreateQueryParams;
    request?: shared.ManagedService;
    security: ServicemanagementServicesCreateSecurity;
}
export declare class ServicemanagementServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
