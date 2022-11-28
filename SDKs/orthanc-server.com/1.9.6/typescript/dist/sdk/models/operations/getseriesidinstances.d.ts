import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdInstancesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdInstancesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetSeriesIdInstancesRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdInstancesPathParams;
    queryParams: GetSeriesIdInstancesQueryParams;
}
export declare class GetSeriesIdInstancesResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdInstances200ApplicationJsonAny?: any;
    statusCode: number;
}
