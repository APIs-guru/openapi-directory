import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdInstancesTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdInstancesTagsQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetSeriesIdInstancesTagsRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdInstancesTagsPathParams;
    queryParams: GetSeriesIdInstancesTagsQueryParams;
}
export declare class GetSeriesIdInstancesTagsResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdInstancesTags200ApplicationJsonAny?: any;
    statusCode: number;
}
