import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEventsPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class GetEventsQueryParams extends SpeakeasyBase {
    cursor?: string;
    endId?: string;
    eventType?: string;
    order?: shared.OrderEnum;
    pageSize?: number;
    startId?: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    pathParams: GetEventsPathParams;
    queryParams: GetEventsQueryParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEvents200ApplicationJsonAny?: any;
}
