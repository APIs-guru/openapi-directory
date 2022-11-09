import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetForecastPointsPathParams extends SpeakeasyBase {
    language: string;
    yatchclubid: string;
}
export declare class GetForecastPointsRequest extends SpeakeasyBase {
    pathParams: GetForecastPointsPathParams;
}
export declare class GetForecastPointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
