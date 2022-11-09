import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsStopPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare class DeploymentmanagerDeploymentsStopQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerDeploymentsStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsStopSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsStopSecurityOption1;
    option2?: DeploymentmanagerDeploymentsStopSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsStopRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsStopPathParams;
    queryParams: DeploymentmanagerDeploymentsStopQueryParams;
    request?: shared.DeploymentsStopRequest;
    security: DeploymentmanagerDeploymentsStopSecurity;
}
export declare class DeploymentmanagerDeploymentsStopResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
