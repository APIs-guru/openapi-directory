import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemListsQueryParams extends SpeakeasyBase {
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
    sha1?: string;
    sort?: string;
    text?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    total?: number;
    until?: string;
    untilId?: string;
}
export declare class GetItemLists200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.ItemList[];
    url?: string;
}
export declare class GetItemListsRequest extends SpeakeasyBase {
    queryParams: GetItemListsQueryParams;
}
export declare class GetItemListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getItemLists200ApplicationJsonObject?: GetItemLists200ApplicationJson;
}
