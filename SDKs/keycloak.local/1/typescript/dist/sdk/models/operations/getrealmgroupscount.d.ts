import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmGroupsCountPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmGroupsCountQueryParams extends SpeakeasyBase {
    search?: string;
    top?: boolean;
}
export declare class GetRealmGroupsCountRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsCountPathParams;
    queryParams: GetRealmGroupsCountQueryParams;
}
export declare class GetRealmGroupsCountResponse extends SpeakeasyBase {
    contentType: string;
    getRealmGroupsCount2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
