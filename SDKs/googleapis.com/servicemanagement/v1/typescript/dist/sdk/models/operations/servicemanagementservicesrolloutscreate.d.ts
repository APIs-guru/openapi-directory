import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesRolloutsCreatePathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesRolloutsCreateQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesRolloutsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsCreateSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesRolloutsCreateSecurityOption1;
    option2?: ServicemanagementServicesRolloutsCreateSecurityOption2;
}
export declare class ServicemanagementServicesRolloutsCreateRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesRolloutsCreatePathParams;
    queryParams: ServicemanagementServicesRolloutsCreateQueryParams;
    request?: shared.Rollout;
    security: ServicemanagementServicesRolloutsCreateSecurity;
}
export declare class ServicemanagementServicesRolloutsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
