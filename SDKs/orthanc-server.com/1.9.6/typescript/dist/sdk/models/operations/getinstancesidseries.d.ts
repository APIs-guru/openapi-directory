import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdSeriesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdSeriesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetInstancesIdSeriesRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdSeriesPathParams;
    queryParams: GetInstancesIdSeriesQueryParams;
}
export declare class GetInstancesIdSeriesResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdSeries200ApplicationJsonAny?: any;
    statusCode: number;
}
