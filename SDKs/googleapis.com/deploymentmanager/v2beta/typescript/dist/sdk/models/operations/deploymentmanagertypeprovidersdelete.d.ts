import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersDeletePathParams extends SpeakeasyBase {
    project: string;
    typeProvider: string;
}
export declare class DeploymentmanagerTypeProvidersDeleteQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersDeleteSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersDeleteSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersDeleteSecurityOption2;
}
export declare class DeploymentmanagerTypeProvidersDeleteRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersDeletePathParams;
    queryParams: DeploymentmanagerTypeProvidersDeleteQueryParams;
    security: DeploymentmanagerTypeProvidersDeleteSecurity;
}
export declare class DeploymentmanagerTypeProvidersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
