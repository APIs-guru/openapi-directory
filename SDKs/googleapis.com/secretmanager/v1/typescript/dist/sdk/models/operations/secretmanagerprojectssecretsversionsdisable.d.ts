import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsVersionsDisablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecretmanagerProjectsSecretsVersionsDisableQueryParams extends SpeakeasyBase {
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
export declare class SecretmanagerProjectsSecretsVersionsDisableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsVersionsDisableRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsVersionsDisablePathParams;
    queryParams: SecretmanagerProjectsSecretsVersionsDisableQueryParams;
    request?: shared.DisableSecretVersionRequest;
    security: SecretmanagerProjectsSecretsVersionsDisableSecurity;
}
export declare class SecretmanagerProjectsSecretsVersionsDisableResponse extends SpeakeasyBase {
    contentType: string;
    secretVersion?: shared.SecretVersion;
    statusCode: number;
}
