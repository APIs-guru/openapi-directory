import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventPathParams extends SpeakeasyBase {
    eventId: number;
}
export declare class GetEventSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetEventDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetEventRequest extends SpeakeasyBase {
    pathParams: GetEventPathParams;
    security: GetEventSecurity;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
    getEventDefaultApplicationJsonObject?: GetEventDefaultApplicationJson;
}
