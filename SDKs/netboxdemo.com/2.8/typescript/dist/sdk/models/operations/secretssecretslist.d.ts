import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretsListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    device?: string;
    deviceN?: string;
    deviceId?: string;
    deviceIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    q?: string;
    role?: string;
    roleN?: string;
    roleId?: string;
    roleIdN?: string;
    tag?: string;
    tagN?: string;
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
