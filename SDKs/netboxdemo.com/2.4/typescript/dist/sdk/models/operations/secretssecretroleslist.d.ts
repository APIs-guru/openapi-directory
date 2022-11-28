import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretRolesListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class SecretsSecretRolesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.SecretRole[];
}
export declare class SecretsSecretRolesListRequest extends SpeakeasyBase {
    queryParams: SecretsSecretRolesListQueryParams;
}
export declare class SecretsSecretRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secretsSecretRolesList200ApplicationJsonObject?: SecretsSecretRolesList200ApplicationJson;
}
