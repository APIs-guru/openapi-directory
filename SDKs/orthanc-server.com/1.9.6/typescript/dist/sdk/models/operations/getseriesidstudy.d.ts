import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdStudyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdStudyQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetSeriesIdStudyRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdStudyPathParams;
    queryParams: GetSeriesIdStudyQueryParams;
}
export declare class GetSeriesIdStudyResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdStudy200ApplicationJsonAny?: any;
    statusCode: number;
}
