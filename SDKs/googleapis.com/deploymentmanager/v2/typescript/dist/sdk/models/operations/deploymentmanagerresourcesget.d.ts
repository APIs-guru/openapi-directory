import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerResourcesGetPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
    resource: string;
}
export declare class DeploymentmanagerResourcesGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerResourcesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerResourcesGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerResourcesGetSecurityOption1;
    option2?: DeploymentmanagerResourcesGetSecurityOption2;
    option3?: DeploymentmanagerResourcesGetSecurityOption3;
    option4?: DeploymentmanagerResourcesGetSecurityOption4;
}
export declare class DeploymentmanagerResourcesGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerResourcesGetPathParams;
    queryParams: DeploymentmanagerResourcesGetQueryParams;
    security: DeploymentmanagerResourcesGetSecurity;
}
export declare class DeploymentmanagerResourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    resource?: shared.Resource;
    statusCode: number;
}
