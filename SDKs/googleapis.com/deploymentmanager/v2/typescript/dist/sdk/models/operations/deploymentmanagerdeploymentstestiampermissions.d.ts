import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsTestIamPermissionsPathParams extends SpeakeasyBase {
    project: string;
    resource: string;
}
export declare class DeploymentmanagerDeploymentsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1;
    option2?: DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsTestIamPermissionsPathParams;
    queryParams: DeploymentmanagerDeploymentsTestIamPermissionsQueryParams;
    request?: shared.TestPermissionsRequest;
    security: DeploymentmanagerDeploymentsTestIamPermissionsSecurity;
}
export declare class DeploymentmanagerDeploymentsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testPermissionsResponse?: shared.TestPermissionsResponse;
}
