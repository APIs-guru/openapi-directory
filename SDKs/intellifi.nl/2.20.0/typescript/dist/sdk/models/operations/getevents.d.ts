import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    limit?: number;
    populate?: string;
    resultsOnly?: boolean;
    sort?: string;
    timeCreated?: string;
    timeEvent?: string;
    timeExpire?: string;
    timeoutS?: number;
    topicAction?: shared.EventTopicActionEnum;
    topicResource?: string;
    topicResourceType?: shared.EventTopicResourceTypeEnum;
    until?: string;
    untilId?: string;
}
export declare class GetEvents200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Event[];
    url?: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEvents200ApplicationJsonObject?: GetEvents200ApplicationJson;
}
