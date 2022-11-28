import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventPathParams extends SpeakeasyBase {
    conversationId: string;
    eventId: string;
}
export declare class GetEventRequest extends SpeakeasyBase {
    pathParams: GetEventPathParams;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventRetrieved?: shared.EventRetrieved;
}
