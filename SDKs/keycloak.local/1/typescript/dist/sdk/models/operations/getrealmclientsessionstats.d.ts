import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmClientSessionStatsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmClientSessionStatsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientSessionStatsPathParams;
}
export declare class GetRealmClientSessionStatsResponse extends SpeakeasyBase {
    contentType: string;
    getRealmClientSessionStats2XxApplicationJsonObjects?: Map<string, any>[];
    statusCode: number;
}
