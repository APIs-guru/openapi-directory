import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetForecastResultJobIdPathParams extends SpeakeasyBase {
    jobId: number;
}
export declare class GetForecastResultJobIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetForecastResultJobIdRequest extends SpeakeasyBase {
    pathParams: GetForecastResultJobIdPathParams;
    headers: GetForecastResultJobIdHeaders;
}
export declare class GetForecastResultJobIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
