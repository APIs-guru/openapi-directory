import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEventPathParams extends SpeakeasyBase {
    conversationId: string;
    eventId: string;
}
export declare class DeleteEventRequest extends SpeakeasyBase {
    pathParams: DeleteEventPathParams;
}
export declare class DeleteEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteEvent200ApplicationJsonObject?: Map<string, any>;
}
