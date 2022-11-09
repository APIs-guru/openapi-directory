import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecretmanagerProjectsSecretsVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecretmanagerProjectsSecretsVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsVersionsListRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsVersionsListPathParams;
    queryParams: SecretmanagerProjectsSecretsVersionsListQueryParams;
    security: SecretmanagerProjectsSecretsVersionsListSecurity;
}
export declare class SecretmanagerProjectsSecretsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSecretVersionsResponse?: shared.ListSecretVersionsResponse;
    statusCode: number;
}
