import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostStatsIncrementFieldPathParams extends SpeakeasyBase {
    field: string;
}
export declare class PostStatsIncrementFieldQueryParams extends SpeakeasyBase {
    appId: string;
    date?: number;
    userId?: string;
    value?: number;
}
export declare class PostStatsIncrementFieldRequest extends SpeakeasyBase {
    pathParams: PostStatsIncrementFieldPathParams;
    queryParams: PostStatsIncrementFieldQueryParams;
}
export declare class PostStatsIncrementFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
