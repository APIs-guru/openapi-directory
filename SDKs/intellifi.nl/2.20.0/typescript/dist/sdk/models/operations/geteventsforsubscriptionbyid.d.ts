import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsForSubscriptionByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEventsForSubscriptionByIdQueryParams extends SpeakeasyBase {
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
    select?: string;
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
export declare class GetEventsForSubscriptionById200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Event[];
    url?: string;
}
export declare class GetEventsForSubscriptionByIdRequest extends SpeakeasyBase {
    pathParams: GetEventsForSubscriptionByIdPathParams;
    queryParams: GetEventsForSubscriptionByIdQueryParams;
}
export declare class GetEventsForSubscriptionByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEventsForSubscriptionById200ApplicationJsonObject?: GetEventsForSubscriptionById200ApplicationJson;
}
