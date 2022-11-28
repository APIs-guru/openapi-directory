import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotListsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    label?: string;
    limit?: number;
    metadata?: string;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    text?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    total?: number;
    until?: string;
    untilId?: string;
}
export declare class GetSpotLists200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.SpotList[];
    url?: string;
}
export declare class GetSpotListsRequest extends SpeakeasyBase {
    queryParams: GetSpotListsQueryParams;
}
export declare class GetSpotListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSpotLists200ApplicationJsonObject?: GetSpotLists200ApplicationJson;
}
