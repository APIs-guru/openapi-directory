import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLongviewClientsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLongviewClientsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLongviewClients200ApplicationJson extends SpeakeasyBase {
    data?: shared.LongviewClient[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLongviewClientsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLongviewClientsRequest extends SpeakeasyBase {
    queryParams: GetLongviewClientsQueryParams;
    security: GetLongviewClientsSecurity;
}
export declare class GetLongviewClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLongviewClients200ApplicationJsonObject?: GetLongviewClients200ApplicationJson;
    getLongviewClientsDefaultApplicationJsonObject?: GetLongviewClientsDefaultApplicationJson;
}
