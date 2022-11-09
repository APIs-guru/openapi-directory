import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsUpdatePathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare enum DeploymentmanagerDeploymentsUpdateCreatePolicyEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Acquire = "ACQUIRE"
}
export declare enum DeploymentmanagerDeploymentsUpdateDeletePolicyEnum {
    Delete = "DELETE",
    Abandon = "ABANDON"
}
export declare class DeploymentmanagerDeploymentsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    createPolicy?: DeploymentmanagerDeploymentsUpdateCreatePolicyEnum;
    deletePolicy?: DeploymentmanagerDeploymentsUpdateDeletePolicyEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    preview?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DeploymentmanagerDeploymentsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsUpdateSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsUpdateSecurityOption1;
    option2?: DeploymentmanagerDeploymentsUpdateSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsUpdateRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsUpdatePathParams;
    queryParams: DeploymentmanagerDeploymentsUpdateQueryParams;
    request?: shared.Deployment;
    security: DeploymentmanagerDeploymentsUpdateSecurity;
}
export declare class DeploymentmanagerDeploymentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
