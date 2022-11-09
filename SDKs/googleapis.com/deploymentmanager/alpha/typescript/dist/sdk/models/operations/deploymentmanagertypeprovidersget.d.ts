import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersGetPathParams extends SpeakeasyBase {
    project: string;
    typeProvider: string;
}
export declare class DeploymentmanagerTypeProvidersGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersGetSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersGetSecurityOption2;
    option3?: DeploymentmanagerTypeProvidersGetSecurityOption3;
    option4?: DeploymentmanagerTypeProvidersGetSecurityOption4;
}
export declare class DeploymentmanagerTypeProvidersGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersGetPathParams;
    queryParams: DeploymentmanagerTypeProvidersGetQueryParams;
    security: DeploymentmanagerTypeProvidersGetSecurity;
}
export declare class DeploymentmanagerTypeProvidersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    typeProvider?: shared.TypeProvider;
}
