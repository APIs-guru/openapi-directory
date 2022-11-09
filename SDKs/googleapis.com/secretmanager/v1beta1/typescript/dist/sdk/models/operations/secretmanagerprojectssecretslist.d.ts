import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecretmanagerProjectsSecretsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecretmanagerProjectsSecretsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsListRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsListPathParams;
    queryParams: SecretmanagerProjectsSecretsListQueryParams;
    security: SecretmanagerProjectsSecretsListSecurity;
}
export declare class SecretmanagerProjectsSecretsListResponse extends SpeakeasyBase {
    contentType: string;
    listSecretsResponse?: shared.ListSecretsResponse;
    statusCode: number;
}
