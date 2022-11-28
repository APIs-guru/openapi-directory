import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypesListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerTypesListQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypesListSecurityOption1;
    option2?: DeploymentmanagerTypesListSecurityOption2;
    option3?: DeploymentmanagerTypesListSecurityOption3;
    option4?: DeploymentmanagerTypesListSecurityOption4;
}
export declare class DeploymentmanagerTypesListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypesListPathParams;
    queryParams: DeploymentmanagerTypesListQueryParams;
    security: DeploymentmanagerTypesListSecurity;
}
export declare class DeploymentmanagerTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    typesListResponse?: shared.TypesListResponse;
}
