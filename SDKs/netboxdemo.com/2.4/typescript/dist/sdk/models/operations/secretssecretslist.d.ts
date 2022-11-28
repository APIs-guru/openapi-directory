import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretsListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    role?: string;
    roleId?: string;
    tag?: string;
}
export declare class SecretsSecretsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Secret[];
}
export declare class SecretsSecretsListRequest extends SpeakeasyBase {
    queryParams: SecretsSecretsListQueryParams;
}
export declare class SecretsSecretsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secretsSecretsList200ApplicationJsonObject?: SecretsSecretsList200ApplicationJson;
}
