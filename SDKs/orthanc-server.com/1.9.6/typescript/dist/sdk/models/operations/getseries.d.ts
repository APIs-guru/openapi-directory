import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesQueryParams extends SpeakeasyBase {
    expand?: string;
    full?: boolean;
    limit?: number;
    short?: boolean;
    since?: number;
}
export declare class GetSeriesRequest extends SpeakeasyBase {
    queryParams: GetSeriesQueryParams;
}
export declare class GetSeriesResponse extends SpeakeasyBase {
    contentType: string;
    getSeries200ApplicationJsonAny?: any;
    statusCode: number;
}
