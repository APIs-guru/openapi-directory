import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsPatchPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare enum DeploymentmanagerDeploymentsPatchCreatePolicyEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Acquire = "ACQUIRE"
}
export declare enum DeploymentmanagerDeploymentsPatchDeletePolicyEnum {
    Delete = "DELETE",
    Abandon = "ABANDON"
}
export declare class DeploymentmanagerDeploymentsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    createPolicy?: DeploymentmanagerDeploymentsPatchCreatePolicyEnum;
    deletePolicy?: DeploymentmanagerDeploymentsPatchDeletePolicyEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    preview?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DeploymentmanagerDeploymentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsPatchSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsPatchSecurityOption1;
    option2?: DeploymentmanagerDeploymentsPatchSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsPatchRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsPatchPathParams;
    queryParams: DeploymentmanagerDeploymentsPatchQueryParams;
    request?: shared.Deployment;
    security: DeploymentmanagerDeploymentsPatchSecurity;
}
export declare class DeploymentmanagerDeploymentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
