import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesRolloutsGetPathParams extends SpeakeasyBase {
    rolloutId: string;
    serviceName: string;
}
export declare class ServicemanagementServicesRolloutsGetQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesRolloutsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesRolloutsGetSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesRolloutsGetSecurityOption1;
    option2?: ServicemanagementServicesRolloutsGetSecurityOption2;
    option3?: ServicemanagementServicesRolloutsGetSecurityOption3;
    option4?: ServicemanagementServicesRolloutsGetSecurityOption4;
}
export declare class ServicemanagementServicesRolloutsGetRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesRolloutsGetPathParams;
    queryParams: ServicemanagementServicesRolloutsGetQueryParams;
    security: ServicemanagementServicesRolloutsGetSecurity;
}
export declare class ServicemanagementServicesRolloutsGetResponse extends SpeakeasyBase {
    contentType: string;
    rollout?: shared.Rollout;
    statusCode: number;
}
