import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecretmanagerProjectsSecretsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    secretId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecretmanagerProjectsSecretsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsCreateRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsCreatePathParams;
    queryParams: SecretmanagerProjectsSecretsCreateQueryParams;
    request?: shared.SecretInput;
    security: SecretmanagerProjectsSecretsCreateSecurity;
}
export declare class SecretmanagerProjectsSecretsCreateResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
}
