import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdSharedTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdSharedTagsQueryParams extends SpeakeasyBase {
    short?: boolean;
    simplify?: boolean;
}
export declare class GetSeriesIdSharedTagsRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdSharedTagsPathParams;
    queryParams: GetSeriesIdSharedTagsQueryParams;
}
export declare class GetSeriesIdSharedTagsResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdSharedTags200ApplicationJsonAny?: any;
    statusCode: number;
}
