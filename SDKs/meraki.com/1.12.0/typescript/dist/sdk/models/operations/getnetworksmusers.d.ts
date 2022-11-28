import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmUsersPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmUsersQueryParams extends SpeakeasyBase {
    emails?: string[];
    ids?: string[];
    scope?: string[];
    usernames?: string[];
}
export declare class GetNetworkSmUsersRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmUsersPathParams;
    queryParams: GetNetworkSmUsersQueryParams;
}
export declare class GetNetworkSmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmUsers200ApplicationJsonObject?: Map<string, any>;
}
