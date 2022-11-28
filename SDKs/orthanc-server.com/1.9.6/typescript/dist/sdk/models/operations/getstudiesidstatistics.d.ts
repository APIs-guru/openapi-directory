import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdStatisticsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdStatisticsRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdStatisticsPathParams;
}
export declare class GetStudiesIdStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdStatistics200ApplicationJsonAny?: any;
    statusCode: number;
}
