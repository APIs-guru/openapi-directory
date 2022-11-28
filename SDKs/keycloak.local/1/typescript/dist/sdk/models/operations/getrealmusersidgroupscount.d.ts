import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmUsersIdGroupsCountPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdGroupsCountQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetRealmUsersIdGroupsCountRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdGroupsCountPathParams;
    queryParams: GetRealmUsersIdGroupsCountQueryParams;
}
export declare class GetRealmUsersIdGroupsCountResponse extends SpeakeasyBase {
    contentType: string;
    getRealmUsersIdGroupsCount2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
