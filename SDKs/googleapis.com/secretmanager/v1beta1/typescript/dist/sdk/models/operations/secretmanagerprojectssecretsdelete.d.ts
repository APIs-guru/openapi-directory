import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecretmanagerProjectsSecretsDeleteQueryParams extends SpeakeasyBase {
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
export declare class SecretmanagerProjectsSecretsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsDeleteRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsDeletePathParams;
    queryParams: SecretmanagerProjectsSecretsDeleteQueryParams;
    security: SecretmanagerProjectsSecretsDeleteSecurity;
}
export declare class SecretmanagerProjectsSecretsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
