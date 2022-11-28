import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersUpdatePathParams extends SpeakeasyBase {
    project: string;
    typeProvider: string;
}
export declare class DeploymentmanagerTypeProvidersUpdateQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersUpdateSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersUpdateSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersUpdateSecurityOption2;
}
export declare class DeploymentmanagerTypeProvidersUpdateRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersUpdatePathParams;
    queryParams: DeploymentmanagerTypeProvidersUpdateQueryParams;
    request?: shared.TypeProvider;
    security: DeploymentmanagerTypeProvidersUpdateSecurity;
}
export declare class DeploymentmanagerTypeProvidersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
