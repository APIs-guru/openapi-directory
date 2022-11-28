import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsVersionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecretmanagerProjectsSecretsVersionsGetQueryParams extends SpeakeasyBase {
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
export declare class SecretmanagerProjectsSecretsVersionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsVersionsGetRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsVersionsGetPathParams;
    queryParams: SecretmanagerProjectsSecretsVersionsGetQueryParams;
    security: SecretmanagerProjectsSecretsVersionsGetSecurity;
}
export declare class SecretmanagerProjectsSecretsVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    secretVersion?: shared.SecretVersion;
    statusCode: number;
}
