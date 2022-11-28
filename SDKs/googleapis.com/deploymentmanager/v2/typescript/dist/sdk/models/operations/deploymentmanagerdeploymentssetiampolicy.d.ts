import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsSetIamPolicyPathParams extends SpeakeasyBase {
    project: string;
    resource: string;
}
export declare class DeploymentmanagerDeploymentsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerDeploymentsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsSetIamPolicySecurityOption1;
    option2?: DeploymentmanagerDeploymentsSetIamPolicySecurityOption2;
}
export declare class DeploymentmanagerDeploymentsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsSetIamPolicyPathParams;
    queryParams: DeploymentmanagerDeploymentsSetIamPolicyQueryParams;
    request?: shared.GlobalSetPolicyRequest;
    security: DeploymentmanagerDeploymentsSetIamPolicySecurity;
}
export declare class DeploymentmanagerDeploymentsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
