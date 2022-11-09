import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetSeriesIdRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdPathParams;
    queryParams: GetSeriesIdQueryParams;
}
export declare class GetSeriesIdResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesId200ApplicationJsonAny?: any;
    statusCode: number;
}
