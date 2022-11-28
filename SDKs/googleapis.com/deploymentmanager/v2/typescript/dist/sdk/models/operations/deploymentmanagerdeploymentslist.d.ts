import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DeploymentmanagerDeploymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsListSecurityOption1;
    option2?: DeploymentmanagerDeploymentsListSecurityOption2;
    option3?: DeploymentmanagerDeploymentsListSecurityOption3;
    option4?: DeploymentmanagerDeploymentsListSecurityOption4;
}
export declare class DeploymentmanagerDeploymentsListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsListPathParams;
    queryParams: DeploymentmanagerDeploymentsListQueryParams;
    security: DeploymentmanagerDeploymentsListSecurity;
}
export declare class DeploymentmanagerDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    deploymentsListResponse?: shared.DeploymentsListResponse;
    statusCode: number;
}
