import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmUsersCountPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmUsersCountQueryParams extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    search?: string;
    username?: string;
}
export declare class GetRealmUsersCountRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersCountPathParams;
    queryParams: GetRealmUsersCountQueryParams;
}
export declare class GetRealmUsersCountResponse extends SpeakeasyBase {
    contentType: string;
    getRealmUsersCount2XxApplicationJsonInt32Integer?: number;
    statusCode: number;
}
