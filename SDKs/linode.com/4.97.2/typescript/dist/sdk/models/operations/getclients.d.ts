import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClientsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetClientsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetClients200ApplicationJson extends SpeakeasyBase {
    data?: shared.OAuthClient[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetClientsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetClientsRequest extends SpeakeasyBase {
    queryParams: GetClientsQueryParams;
    security: GetClientsSecurity;
}
export declare class GetClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getClients200ApplicationJsonObject?: GetClients200ApplicationJson;
    getClientsDefaultApplicationJsonObject?: GetClientsDefaultApplicationJson;
}
