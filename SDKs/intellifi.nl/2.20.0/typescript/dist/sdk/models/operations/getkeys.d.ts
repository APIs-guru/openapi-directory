import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKeysQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    isReadOnly?: boolean;
    label?: string;
    limit?: number;
    populate?: string;
    resultsOnly?: boolean;
    secret?: string;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetKeysSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class GetKeys200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Key[];
    url?: string;
}
export declare class GetKeysRequest extends SpeakeasyBase {
    queryParams: GetKeysQueryParams;
    security: GetKeysSecurity;
}
export declare class GetKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getKeys200ApplicationJsonObject?: GetKeys200ApplicationJson;
}
