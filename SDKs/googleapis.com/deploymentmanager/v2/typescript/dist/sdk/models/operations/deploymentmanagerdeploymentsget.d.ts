import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsGetPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare class DeploymentmanagerDeploymentsGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerDeploymentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsGetSecurityOption1;
    option2?: DeploymentmanagerDeploymentsGetSecurityOption2;
    option3?: DeploymentmanagerDeploymentsGetSecurityOption3;
    option4?: DeploymentmanagerDeploymentsGetSecurityOption4;
}
export declare class DeploymentmanagerDeploymentsGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsGetPathParams;
    queryParams: DeploymentmanagerDeploymentsGetQueryParams;
    security: DeploymentmanagerDeploymentsGetSecurity;
}
export declare class DeploymentmanagerDeploymentsGetResponse extends SpeakeasyBase {
    contentType: string;
    deployment?: shared.Deployment;
    statusCode: number;
}
