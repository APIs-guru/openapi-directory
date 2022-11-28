import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerManifestsListPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare class DeploymentmanagerManifestsListQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerManifestsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerManifestsListSecurityOption1;
    option2?: DeploymentmanagerManifestsListSecurityOption2;
    option3?: DeploymentmanagerManifestsListSecurityOption3;
    option4?: DeploymentmanagerManifestsListSecurityOption4;
}
export declare class DeploymentmanagerManifestsListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerManifestsListPathParams;
    queryParams: DeploymentmanagerManifestsListQueryParams;
    security: DeploymentmanagerManifestsListSecurity;
}
export declare class DeploymentmanagerManifestsListResponse extends SpeakeasyBase {
    contentType: string;
    manifestsListResponse?: shared.ManifestsListResponse;
    statusCode: number;
}
