import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    pathParams: GetEventsPathParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventRetrieveds?: shared.EventRetrieved[];
}
