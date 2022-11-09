import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersPatchPathParams extends SpeakeasyBase {
    project: string;
    typeProvider: string;
}
export declare class DeploymentmanagerTypeProvidersPatchQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersPatchSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersPatchSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersPatchSecurityOption2;
}
export declare class DeploymentmanagerTypeProvidersPatchRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersPatchPathParams;
    queryParams: DeploymentmanagerTypeProvidersPatchQueryParams;
    request?: shared.TypeProvider;
    security: DeploymentmanagerTypeProvidersPatchSecurity;
}
export declare class DeploymentmanagerTypeProvidersPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
