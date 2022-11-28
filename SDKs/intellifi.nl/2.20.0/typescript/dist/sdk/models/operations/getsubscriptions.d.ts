import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    databaseHoldTimeH?: number;
    description?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    limit?: number;
    populate?: string;
    populateEvents?: boolean;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    topicFilter?: string;
    until?: string;
    untilId?: string;
    verifyTargetCertificate?: boolean;
}
export declare class GetSubscriptions200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Subscription[];
    url?: string;
}
export declare class GetSubscriptionsRequest extends SpeakeasyBase {
    queryParams: GetSubscriptionsQueryParams;
}
export declare class GetSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSubscriptions200ApplicationJsonObject?: GetSubscriptions200ApplicationJson;
}
