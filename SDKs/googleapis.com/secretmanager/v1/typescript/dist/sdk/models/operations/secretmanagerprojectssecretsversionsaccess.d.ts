import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsVersionsAccessPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecretmanagerProjectsSecretsVersionsAccessQueryParams extends SpeakeasyBase {
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
export declare class SecretmanagerProjectsSecretsVersionsAccessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsVersionsAccessRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsVersionsAccessPathParams;
    queryParams: SecretmanagerProjectsSecretsVersionsAccessQueryParams;
    security: SecretmanagerProjectsSecretsVersionsAccessSecurity;
}
export declare class SecretmanagerProjectsSecretsVersionsAccessResponse extends SpeakeasyBase {
    accessSecretVersionResponse?: shared.AccessSecretVersionResponse;
    contentType: string;
    statusCode: number;
}
