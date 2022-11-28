import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventReadPathParams extends SpeakeasyBase {
    eventId: number;
}
export declare class EventReadSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class EventReadDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class EventReadRequest extends SpeakeasyBase {
    pathParams: EventReadPathParams;
    security: EventReadSecurity;
}
export declare class EventReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventRead200ApplicationJsonObject?: Map<string, any>;
    eventReadDefaultApplicationJsonObject?: EventReadDefaultApplicationJson;
}
