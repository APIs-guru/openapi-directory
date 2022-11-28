import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKvPairsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    kvKey?: string;
    limit?: number;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetKvPairs200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.KeyValuePair[];
    url?: string;
}
export declare class GetKvPairsRequest extends SpeakeasyBase {
    queryParams: GetKvPairsQueryParams;
}
export declare class GetKvPairsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getKvPairs200ApplicationJsonObject?: GetKvPairs200ApplicationJson;
}
