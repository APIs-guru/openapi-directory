import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventSeenPathParams extends SpeakeasyBase {
    eventId: number;
}
export declare class EventSeenSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class EventSeenDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class EventSeenRequest extends SpeakeasyBase {
    pathParams: EventSeenPathParams;
    security: EventSeenSecurity;
}
export declare class EventSeenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventSeen200ApplicationJsonObject?: Map<string, any>;
    eventSeenDefaultApplicationJsonObject?: EventSeenDefaultApplicationJson;
}
