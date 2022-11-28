import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesConsumersTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1;
    option2?: ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2;
    option3?: ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3;
    option4?: ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesConsumersTestIamPermissionsPathParams;
    queryParams: ServicemanagementServicesConsumersTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ServicemanagementServicesConsumersTestIamPermissionsSecurity;
}
export declare class ServicemanagementServicesConsumersTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
