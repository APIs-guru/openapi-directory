import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerOperationsListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsListSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerOperationsListSecurityOption1;
    option2?: DeploymentmanagerOperationsListSecurityOption2;
    option3?: DeploymentmanagerOperationsListSecurityOption3;
    option4?: DeploymentmanagerOperationsListSecurityOption4;
}
export declare class DeploymentmanagerOperationsListRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerOperationsListPathParams;
    queryParams: DeploymentmanagerOperationsListQueryParams;
    security: DeploymentmanagerOperationsListSecurity;
}
export declare class DeploymentmanagerOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    operationsListResponse?: shared.OperationsListResponse;
    statusCode: number;
}
