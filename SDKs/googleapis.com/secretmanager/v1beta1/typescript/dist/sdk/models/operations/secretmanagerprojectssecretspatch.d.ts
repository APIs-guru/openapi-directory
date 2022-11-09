import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecretmanagerProjectsSecretsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecretmanagerProjectsSecretsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsPatchRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsPatchPathParams;
    queryParams: SecretmanagerProjectsSecretsPatchQueryParams;
    request?: shared.Secret;
    security: SecretmanagerProjectsSecretsPatchSecurity;
}
export declare class SecretmanagerProjectsSecretsPatchResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
}
