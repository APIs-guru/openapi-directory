import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsDeletePathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare enum DeploymentmanagerDeploymentsDeleteDeletePolicyEnum {
    Delete = "DELETE",
    Abandon = "ABANDON"
}
export declare class DeploymentmanagerDeploymentsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deletePolicy?: DeploymentmanagerDeploymentsDeleteDeletePolicyEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DeploymentmanagerDeploymentsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsDeleteSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsDeleteSecurityOption1;
    option2?: DeploymentmanagerDeploymentsDeleteSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsDeleteRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsDeletePathParams;
    queryParams: DeploymentmanagerDeploymentsDeleteQueryParams;
    security: DeploymentmanagerDeploymentsDeleteSecurity;
}
export declare class DeploymentmanagerDeploymentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
