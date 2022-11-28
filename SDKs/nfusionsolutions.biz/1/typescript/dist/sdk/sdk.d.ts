import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nfusionsolutions.biz"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getApiVVersionCurrenciesHistory - Get historical prices for requested currency pairs
     *
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    getApiVVersionCurrenciesHistory(req: operations.GetApiVVersionCurrenciesHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesHistoryResponse>;
    /**
     * getApiVVersionCurrenciesHistorySupported - Get list of currency pairs supported by the history endpoint
     *
     * Only the currency pairs in the direction noted can be used with the history endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    getApiVVersionCurrenciesHistorySupported(req: operations.GetApiVVersionCurrenciesHistorySupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesHistorySupportedResponse>;
    /**
     * getApiVVersionCurrenciesRate - Get latest mid rate for requested currency pairs
     *
     * Current Mid Rate
    **/
    getApiVVersionCurrenciesRate(req: operations.GetApiVVersionCurrenciesRateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesRateResponse>;
    /**
     * getApiVVersionCurrenciesRateSupported - Get list of currencies supported by the rate endpoint
     *
     * Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
     * For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
    **/
    getApiVVersionCurrenciesRateSupported(req: operations.GetApiVVersionCurrenciesRateSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesRateSupportedResponse>;
    /**
     * getApiVVersionCurrenciesSummary - Get latest Summary for requested currency pairs
     *
     * Current and daily summary information combined into a single quote
    **/
    getApiVVersionCurrenciesSummary(req: operations.GetApiVVersionCurrenciesSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesSummaryResponse>;
    /**
     * getApiVVersionCurrenciesSummarySupported - Get list of currency pairs supported by the Summary endpoint
     *
     * Only the currency pairs in the direction noted can be used with the Summary endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    getApiVVersionCurrenciesSummarySupported(req: operations.GetApiVVersionCurrenciesSummarySupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionCurrenciesSummarySupportedResponse>;
    /**
     * getApiVVersionMetalsBenchmarkHistory - Get historical benchmark prices for requested metals
     *
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    getApiVVersionMetalsBenchmarkHistory(req: operations.GetApiVVersionMetalsBenchmarkHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkHistoryResponse>;
    /**
     * getApiVVersionMetalsBenchmarkSummary - Get latest Benchmark prices for requested metals
     *
     * Benchmark price information
    **/
    getApiVVersionMetalsBenchmarkSummary(req: operations.GetApiVVersionMetalsBenchmarkSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkSummaryResponse>;
    /**
     * getApiVVersionMetalsBenchmarkSupported - Get list of symbols supported by the benchmark endpoints
    **/
    getApiVVersionMetalsBenchmarkSupported(req: operations.GetApiVVersionMetalsBenchmarkSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsBenchmarkSupportedResponse>;
    /**
     * getApiVVersionMetalsSpotHistory - Get historical Spot prices for requested metals
     *
     * Historical OHLC data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     *
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    getApiVVersionMetalsSpotHistory(req: operations.GetApiVVersionMetalsSpotHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotHistoryResponse>;
    /**
     * getApiVVersionMetalsSpotPerformance - Get Historical Performance for requested metals
     *
     * Historical Performance information
    **/
    getApiVVersionMetalsSpotPerformance(req: operations.GetApiVVersionMetalsSpotPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotPerformanceResponse>;
    /**
     * getApiVVersionMetalsSpotPerformanceAnnual - Get Historical Annual Performance for requested metals
     *
     * Annual Historical Performance information
    **/
    getApiVVersionMetalsSpotPerformanceAnnual(req: operations.GetApiVVersionMetalsSpotPerformanceAnnualRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotPerformanceAnnualResponse>;
    /**
     * getApiVVersionMetalsSpotRatioHistory - Get historical Spot Ratio prices for requested metals
     *
     * Historical data for the specified period and interval size
     *
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    getApiVVersionMetalsSpotRatioHistory(req: operations.GetApiVVersionMetalsSpotRatioHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotRatioHistoryResponse>;
    /**
     * getApiVVersionMetalsSpotRatioSummary - Get latest Spot Summary for requested metal ratios
     *
     * Ratios between prices of two metals
    **/
    getApiVVersionMetalsSpotRatioSummary(req: operations.GetApiVVersionMetalsSpotRatioSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotRatioSummaryResponse>;
    /**
     * getApiVVersionMetalsSpotSummary - Get latest Spot Summary for requested metals
     *
     * Current and daily summary information combined into a single quote
    **/
    getApiVVersionMetalsSpotSummary(req: operations.GetApiVVersionMetalsSpotSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotSummaryResponse>;
    /**
     * getApiVVersionMetalsSpotSupported - Get list of symbols supported by the spot endpoints
    **/
    getApiVVersionMetalsSpotSupported(req: operations.GetApiVVersionMetalsSpotSupportedRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSpotSupportedResponse>;
    /**
     * getApiVVersionMetalsSupportedCurrency - Get list of currencies supported by metals endpoints for currency conversion
    **/
    getApiVVersionMetalsSupportedCurrency(req: operations.GetApiVVersionMetalsSupportedCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVVersionMetalsSupportedCurrencyResponse>;
}
export {};
