import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsVersionsEnablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecretmanagerProjectsSecretsVersionsEnableQueryParams extends SpeakeasyBase {
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
export declare class SecretmanagerProjectsSecretsVersionsEnableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsVersionsEnableRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsVersionsEnablePathParams;
    queryParams: SecretmanagerProjectsSecretsVersionsEnableQueryParams;
    request?: shared.EnableSecretVersionRequest;
    security: SecretmanagerProjectsSecretsVersionsEnableSecurity;
}
export declare class SecretmanagerProjectsSecretsVersionsEnableResponse extends SpeakeasyBase {
    contentType: string;
    secretVersion?: shared.SecretVersion;
    statusCode: number;
}
