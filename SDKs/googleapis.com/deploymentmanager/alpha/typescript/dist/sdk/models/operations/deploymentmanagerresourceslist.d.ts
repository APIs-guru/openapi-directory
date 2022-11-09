import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerResourcesListPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare class DeploymentmanagerResourcesListQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerResourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerResourcesListSecurityOption1;
    option2?: DeploymentmanagerResourcesListSecurityOption2;
    option3?: DeploymentmanagerResourcesListSecurityOption3;
    option4?: DeploymentmanagerResourcesListSecurityOption4;
}
export declare class DeploymentmanagerResourcesListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerResourcesListPathParams;
    queryParams: DeploymentmanagerResourcesListQueryParams;
    security: DeploymentmanagerResourcesListSecurity;
}
export declare class DeploymentmanagerResourcesListResponse extends SpeakeasyBase {
    contentType: string;
    resourcesListResponse?: shared.ResourcesListResponse;
    statusCode: number;
}
