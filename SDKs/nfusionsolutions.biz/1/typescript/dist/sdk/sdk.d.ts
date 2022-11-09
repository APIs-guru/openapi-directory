import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    GetApiVVersionCurrenciesHistory(req: operations.GetApiVVersionCurrenciesHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesHistoryResponse>;
    /**
     * Only the currency pairs in the direction noted can be used with the history endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    GetApiVVersionCurrenciesHistorySupported(req: operations.GetApiVVersionCurrenciesHistorySupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesHistorySupportedResponse>;
    /**
     * Current Mid Rate
    **/
    GetApiVVersionCurrenciesRate(req: operations.GetApiVVersionCurrenciesRateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesRateResponse>;
    /**
     * Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
     * For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
    **/
    GetApiVVersionCurrenciesRateSupported(req: operations.GetApiVVersionCurrenciesRateSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesRateSupportedResponse>;
    /**
     * Current and daily summary information combined into a single quote
    **/
    GetApiVVersionCurrenciesSummary(req: operations.GetApiVVersionCurrenciesSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesSummaryResponse>;
    /**
     * Only the currency pairs in the direction noted can be used with the Summary endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    GetApiVVersionCurrenciesSummarySupported(req: operations.GetApiVVersionCurrenciesSummarySupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesSummarySupportedResponse>;
    /**
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    GetApiVVersionMetalsBenchmarkHistory(req: operations.GetApiVVersionMetalsBenchmarkHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkHistoryResponse>;
    /**
     * Benchmark price information
    **/
    GetApiVVersionMetalsBenchmarkSummary(req: operations.GetApiVVersionMetalsBenchmarkSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkSummaryResponse>;
    GetApiVVersionMetalsBenchmarkSupported(req: operations.GetApiVVersionMetalsBenchmarkSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkSupportedResponse>;
    /**
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    GetApiVVersionMetalsSpotHistory(req: operations.GetApiVVersionMetalsSpotHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotHistoryResponse>;
    /**
     * Historical Performance information
    **/
    GetApiVVersionMetalsSpotPerformance(req: operations.GetApiVVersionMetalsSpotPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotPerformanceResponse>;
    /**
     * Annual Historical Performance information
    **/
    GetApiVVersionMetalsSpotPerformanceAnnual(req: operations.GetApiVVersionMetalsSpotPerformanceAnnualRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotPerformanceAnnualResponse>;
    /**
     * Historical data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    GetApiVVersionMetalsSpotRatioHistory(req: operations.GetApiVVersionMetalsSpotRatioHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotRatioHistoryResponse>;
    /**
     * Ratios between prices of two metals
    **/
    GetApiVVersionMetalsSpotRatioSummary(req: operations.GetApiVVersionMetalsSpotRatioSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotRatioSummaryResponse>;
    /**
     * Current and daily summary information combined into a single quote
    **/
    GetApiVVersionMetalsSpotSummary(req: operations.GetApiVVersionMetalsSpotSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotSummaryResponse>;
    GetApiVVersionMetalsSpotSupported(req: operations.GetApiVVersionMetalsSpotSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotSupportedResponse>;
    GetApiVVersionMetalsSupportedCurrency(req: operations.GetApiVVersionMetalsSupportedCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSupportedCurrencyResponse>;
}
export {};
