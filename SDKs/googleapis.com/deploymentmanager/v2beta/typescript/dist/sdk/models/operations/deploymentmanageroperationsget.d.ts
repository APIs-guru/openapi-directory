import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerOperationsGetPathParams extends SpeakeasyBase {
    operation: string;
    project: string;
}
export declare class DeploymentmanagerOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerOperationsGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerOperationsGetSecurityOption1;
    option2?: DeploymentmanagerOperationsGetSecurityOption2;
    option3?: DeploymentmanagerOperationsGetSecurityOption3;
    option4?: DeploymentmanagerOperationsGetSecurityOption4;
}
export declare class DeploymentmanagerOperationsGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerOperationsGetPathParams;
    queryParams: DeploymentmanagerOperationsGetQueryParams;
    security: DeploymentmanagerOperationsGetSecurity;
}
export declare class DeploymentmanagerOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
