import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerTypeProvidersListQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersListSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersListSecurityOption2;
    option3?: DeploymentmanagerTypeProvidersListSecurityOption3;
    option4?: DeploymentmanagerTypeProvidersListSecurityOption4;
}
export declare class DeploymentmanagerTypeProvidersListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersListPathParams;
    queryParams: DeploymentmanagerTypeProvidersListQueryParams;
    security: DeploymentmanagerTypeProvidersListSecurity;
}
export declare class DeploymentmanagerTypeProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    typeProvidersListResponse?: shared.TypeProvidersListResponse;
}
