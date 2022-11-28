import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPortfolioForecastPerformanceRewindHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPortfolioForecastPerformanceRewindRequests extends SpeakeasyBase {
    forecastPerformanceRequest?: shared.ForecastPerformanceRequest;
    forecastPerformanceRequest1?: shared.ForecastPerformanceRequest;
    forecastPerformanceRequest2?: shared.ForecastPerformanceRequest;
}
export declare class PostPortfolioForecastPerformanceRewindRequest extends SpeakeasyBase {
    headers: PostPortfolioForecastPerformanceRewindHeaders;
    request?: PostPortfolioForecastPerformanceRewindRequests;
}
export declare class PostPortfolioForecastPerformanceRewindResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    rewindResponse?: shared.RewindResponse;
    statusCode: number;
}
