import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdSeriesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdSeriesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetStudiesIdSeriesRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdSeriesPathParams;
    queryParams: GetStudiesIdSeriesQueryParams;
}
export declare class GetStudiesIdSeriesResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdSeries200ApplicationJsonAny?: any;
    statusCode: number;
}
