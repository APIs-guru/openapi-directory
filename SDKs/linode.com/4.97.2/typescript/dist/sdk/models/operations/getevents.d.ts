import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetEventsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetEvents200ApplicationJson extends SpeakeasyBase {
    data?: shared.Event[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetEventsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
    security: GetEventsSecurity;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEvents200ApplicationJsonObject?: GetEvents200ApplicationJson;
    getEventsDefaultApplicationJsonObject?: GetEventsDefaultApplicationJson;
}
