import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsGetIamPolicyPathParams extends SpeakeasyBase {
    project: string;
    resource: string;
}
export declare class DeploymentmanagerDeploymentsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DeploymentmanagerDeploymentsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsGetIamPolicySecurityOption1;
    option2?: DeploymentmanagerDeploymentsGetIamPolicySecurityOption2;
}
export declare class DeploymentmanagerDeploymentsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsGetIamPolicyPathParams;
    queryParams: DeploymentmanagerDeploymentsGetIamPolicyQueryParams;
    security: DeploymentmanagerDeploymentsGetIamPolicySecurity;
}
export declare class DeploymentmanagerDeploymentsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
