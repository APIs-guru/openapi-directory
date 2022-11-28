import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersListTypesPathParams extends SpeakeasyBase {
    project: string;
    typeProvider: string;
}
export declare class DeploymentmanagerTypeProvidersListTypesQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersListTypesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListTypesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListTypesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListTypesSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersListTypesSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersListTypesSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersListTypesSecurityOption2;
    option3?: DeploymentmanagerTypeProvidersListTypesSecurityOption3;
    option4?: DeploymentmanagerTypeProvidersListTypesSecurityOption4;
}
export declare class DeploymentmanagerTypeProvidersListTypesRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersListTypesPathParams;
    queryParams: DeploymentmanagerTypeProvidersListTypesQueryParams;
    security: DeploymentmanagerTypeProvidersListTypesSecurity;
}
export declare class DeploymentmanagerTypeProvidersListTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    typeProvidersListTypesResponse?: shared.TypeProvidersListTypesResponse;
}
