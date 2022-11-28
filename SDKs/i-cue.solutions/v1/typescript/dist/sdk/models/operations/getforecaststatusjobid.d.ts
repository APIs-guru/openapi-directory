import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetForecastStatusJobIdPathParams extends SpeakeasyBase {
    jobId: number;
}
export declare class GetForecastStatusJobIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetForecastStatusJobIdRequest extends SpeakeasyBase {
    pathParams: GetForecastStatusJobIdPathParams;
    headers: GetForecastStatusJobIdHeaders;
}
export declare class GetForecastStatusJobIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
