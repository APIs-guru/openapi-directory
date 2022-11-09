import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerCompositeTypesListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerCompositeTypesListQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerCompositeTypesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerCompositeTypesListSecurityOption1;
    option2?: DeploymentmanagerCompositeTypesListSecurityOption2;
    option3?: DeploymentmanagerCompositeTypesListSecurityOption3;
    option4?: DeploymentmanagerCompositeTypesListSecurityOption4;
}
export declare class DeploymentmanagerCompositeTypesListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerCompositeTypesListPathParams;
    queryParams: DeploymentmanagerCompositeTypesListQueryParams;
    security: DeploymentmanagerCompositeTypesListSecurity;
}
export declare class DeploymentmanagerCompositeTypesListResponse extends SpeakeasyBase {
    compositeTypesListResponse?: shared.CompositeTypesListResponse;
    contentType: string;
    statusCode: number;
}
