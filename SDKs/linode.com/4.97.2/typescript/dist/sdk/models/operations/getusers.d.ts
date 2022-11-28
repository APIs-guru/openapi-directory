import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetUsersSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetUsers200ApplicationJson extends SpeakeasyBase {
    data?: shared.User[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetUsersDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
    security: GetUsersSecurity;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUsers200ApplicationJsonObject?: GetUsers200ApplicationJson;
    getUsersDefaultApplicationJsonObject?: GetUsersDefaultApplicationJson;
}
