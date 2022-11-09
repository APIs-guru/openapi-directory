import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsInsertPathParams extends SpeakeasyBase {
    project: string;
}
export declare enum DeploymentmanagerDeploymentsInsertCreatePolicyEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Acquire = "ACQUIRE",
    Create = "CREATE"
}
export declare class DeploymentmanagerDeploymentsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    createPolicy?: DeploymentmanagerDeploymentsInsertCreatePolicyEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    preview?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DeploymentmanagerDeploymentsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsInsertSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsInsertSecurityOption1;
    option2?: DeploymentmanagerDeploymentsInsertSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsInsertRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsInsertPathParams;
    queryParams: DeploymentmanagerDeploymentsInsertQueryParams;
    request?: shared.Deployment;
    security: DeploymentmanagerDeploymentsInsertSecurity;
}
export declare class DeploymentmanagerDeploymentsInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
