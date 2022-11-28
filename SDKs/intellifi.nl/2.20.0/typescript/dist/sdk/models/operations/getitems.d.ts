import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterCode?: string;
    afterId?: string;
    before?: string;
    beforeCode?: string;
    beforeId?: string;
    codeHex?: string;
    from?: string;
    fromCode?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    isPresent?: boolean;
    label?: string;
    limit?: number;
    location?: string;
    metadata?: string;
    moveCount?: number;
    populate?: string;
    protocol?: shared.ItemProtocolEnum;
    resultsOnly?: boolean;
    select?: string;
    sets?: string;
    sort?: string;
    technology?: shared.TechnologyEnum;
    text?: string;
    timeCreated?: string;
    timeLastPresent?: string;
    timeMoved?: string;
    timeUpdated?: string;
    timeoutS?: number;
    type?: shared.ItemTypeEnum;
    until?: string;
    untilCode?: string;
    untilId?: string;
}
export declare class GetItems200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Item[];
    url?: string;
}
export declare class GetItemsRequest extends SpeakeasyBase {
    queryParams: GetItemsQueryParams;
}
export declare class GetItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getItems200ApplicationJsonObject?: GetItems200ApplicationJson;
}
