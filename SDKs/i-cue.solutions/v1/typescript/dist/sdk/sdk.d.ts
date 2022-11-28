import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://i-cue.solutions"];
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
     * deleteAdministrationEntityId - Delete organization
     *
     * This is a iCUE only endpoint or Enterprise feature.
    **/
    deleteAdministrationEntityId(req: operations.DeleteAdministrationEntityIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdministrationEntityIdResponse>;
    /**
     * deleteAdministrationPlanningLevel - Delete planning level
     *
     * Delete planning level. This is an Enterprise feature.
    **/
    deleteAdministrationPlanningLevel(req: operations.DeleteAdministrationPlanningLevelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdministrationPlanningLevelResponse>;
    /**
     * deleteAdministrationUserEntityIdId - Delete user
     *
     * Delete user
    **/
    deleteAdministrationUserEntityIdId(req: operations.DeleteAdministrationUserEntityIdIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdministrationUserEntityIdIdResponse>;
    /**
     * getAdministrationEntity - Get all organizations
     *
     * This is a iCUE only endpoint or Enterprise feature.
    **/
    getAdministrationEntity(req: operations.GetAdministrationEntityRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministrationEntityResponse>;
    /**
     * getAdministrationPlanningLevels - Get all planning levels
     *
     * Get all planning levels.
    **/
    getAdministrationPlanningLevels(req: operations.GetAdministrationPlanningLevelsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministrationPlanningLevelsResponse>;
    /**
     * getAdministrationUserEntityId - Get all users
     *
     * Get all users
    **/
    getAdministrationUserEntityId(req: operations.GetAdministrationUserEntityIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministrationUserEntityIdResponse>;
    /**
     * getForecastResultJobId - Forecast result
     *
     * Get result for long running forecast job
    **/
    getForecastResultJobId(req: operations.GetForecastResultJobIdRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastResultJobIdResponse>;
    /**
     * getForecastStatusJobId - Forecast status
     *
     * Get status for long running forecast job
    **/
    getForecastStatusJobId(req: operations.GetForecastStatusJobIdRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastStatusJobIdResponse>;
    /**
     * getHyperparameter - Get hyperparameters
     *
     * Get entity global hyperparameters.
    **/
    getHyperparameter(req: operations.GetHyperparameterRequest, config?: AxiosRequestConfig): Promise<operations.GetHyperparameterResponse>;
    /**
     * getReportPerformancePlanningLevelId - Month over month performance per planning level
     *
     * Month over month performance per planning level
    **/
    getReportPerformancePlanningLevelId(req: operations.GetReportPerformancePlanningLevelIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPerformancePlanningLevelIdResponse>;
    /**
     * getReportPerformanceSkuRationalizationPlanningLevelId - SKU rationalization report
     *
     * SKU rationalization report
    **/
    getReportPerformanceSkuRationalizationPlanningLevelId(req: operations.GetReportPerformanceSkuRationalizationPlanningLevelIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPerformanceSkuRationalizationPlanningLevelIdResponse>;
    /**
     * getReportPlanningLevelOrganization - Get list of plannign levels by organization
     *
     * Get list of plannign levels by organization
    **/
    getReportPlanningLevelOrganization(req: operations.GetReportPlanningLevelOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPlanningLevelOrganizationResponse>;
    /**
     * getReportPlanningLevelUser - Get list of plannign levels by user
     *
     * Get list of plannign levels by user
    **/
    getReportPlanningLevelUser(req: operations.GetReportPlanningLevelUserRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPlanningLevelUserResponse>;
    /**
     * getReportUser - Get usage statistics per user
     *
     * Get usage statistics per user
    **/
    getReportUser(req: operations.GetReportUserRequest, config?: AxiosRequestConfig): Promise<operations.GetReportUserResponse>;
    /**
     * postAdministrationEntity - Create organization
     *
     * This is a iCUE only endpoint or Enterprise feature.
    **/
    postAdministrationEntity(req: operations.PostAdministrationEntityRequest, config?: AxiosRequestConfig): Promise<operations.PostAdministrationEntityResponse>;
    /**
     * postAdministrationPlanningLevelLock - Lock planning level
     *
     * Lock planning level against modification. This is an Enterprise feature.
    **/
    postAdministrationPlanningLevelLock(req: operations.PostAdministrationPlanningLevelLockRequest, config?: AxiosRequestConfig): Promise<operations.PostAdministrationPlanningLevelLockResponse>;
    /**
     * postAdministrationToken - Issue a token
     *
     * This is a iCUE only endpoint.
    **/
    postAdministrationToken(req: operations.PostAdministrationTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostAdministrationTokenResponse>;
    /**
     * postAdministrationUser - Create user
     *
     * Create new user for entity/organization. This can be done by entity administrator.
    **/
    postAdministrationUser(req: operations.PostAdministrationUserRequest, config?: AxiosRequestConfig): Promise<operations.PostAdministrationUserResponse>;
    /**
     * postForecast - Forecasts only, for faster results
     *
     * To support maximum operation and integration speed, this endpoint only returns the calculated forecast.
    **/
    postForecast(req: operations.PostForecastRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastResponse>;
    /**
     * postForecastAi - Forecast utilizing advanced machine learning models
     *
     * Forecast utilizing Facebookm Prophet, UBER Orbit, amongst other advanced machine learning models. Please be mindful of enhanced execution times (~2s per timeseries).
    **/
    postForecastAi(req: operations.PostForecastAiRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastAiResponse>;
    /**
     * postForecastAiHistoryAndForecast - History and forecast utilizing advanced machine learning models
     *
     * History and forecast utilizing Facebookm Prophet, UBER Orbit, amongst other advanced machine learning models. Please be mindful of enhanced execution times (~2s per timeseries).
    **/
    postForecastAiHistoryAndForecast(req: operations.PostForecastAiHistoryAndForecastRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastAiHistoryAndForecastResponse>;
    /**
     * postForecastForecastBottomUp - Bottom up forecasting
     *
     * Calculate forecast bny timeseries and sum results up to establish forecast for top level timeseries.
    **/
    postForecastForecastBottomUp(req: operations.PostForecastForecastBottomUpRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastForecastBottomUpResponse>;
    /**
     * postForecastForecastTopDown - Top down forecasting
     *
     * Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.
    **/
    postForecastForecastTopDown(req: operations.PostForecastForecastTopDownRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastForecastTopDownResponse>;
    /**
     * postForecastFullDetail - Full forecast result details, including error, trend seasonality and outlier
     *
     * Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.
    **/
    postForecastFullDetail(req: operations.PostForecastFullDetailRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastFullDetailResponse>;
    /**
     * postForecastHistoryAndForecast - History and forecast for fast timeseries view
     *
     * Reponse provides history and forecast per timeseries. Great for visualizing results.
    **/
    postForecastHistoryAndForecast(req: operations.PostForecastHistoryAndForecastRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastHistoryAndForecastResponse>;
    /**
     * postForecastOptimalParameter - Get optimal parameter per method
     *
     * Use the optimal parameter sets created by iCUE to set the method parameters of the internal planning system.
    **/
    postForecastOptimalParameter(req: operations.PostForecastOptimalParameterRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastOptimalParameterResponse>;
    /**
     * postForecastRerun - Rerun previously uploaded planning level
     *
     * Rerun previously uploaded planning level.
    **/
    postForecastRerun(req: operations.PostForecastRerunRequest, config?: AxiosRequestConfig): Promise<operations.PostForecastRerunResponse>;
    /**
     * postHyperparameter - Set hyperparameters
     *
     * Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).
    **/
    postHyperparameter(req: operations.PostHyperparameterRequest, config?: AxiosRequestConfig): Promise<operations.PostHyperparameterResponse>;
    /**
     * postInventoryAmazonIpi - Calculate Amazon Inventory Performance Index (IPI)
     *
     * Calculate Amazon Inventory Performance Index (IPI)
    **/
    postInventoryAmazonIpi(req: operations.PostInventoryAmazonIpiRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryAmazonIpiResponse>;
    /**
     * postInventoryCaryyingCost - Carrying Cost
     *
     * Carrying Cost
    **/
    postInventoryCaryyingCost(req: operations.PostInventoryCaryyingCostRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryCaryyingCostResponse>;
    /**
     * postInventoryEoq - Calculate economic order quantity
     *
     * Calculate economic order quantity
    **/
    postInventoryEoq(req: operations.PostInventoryEoqRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryEoqResponse>;
    /**
     * postInventoryFillRate - Calculate fill rate
     *
     * Calculate fill rate
    **/
    postInventoryFillRate(req: operations.PostInventoryFillRateRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryFillRateResponse>;
    /**
     * postInventoryFinancialImapctForecastAccuracy - Calculate financial impact of forecast accuracy
     *
     * Calculate financial impact of forecast accuracy
    **/
    postInventoryFinancialImapctForecastAccuracy(req: operations.PostInventoryFinancialImapctForecastAccuracyRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryFinancialImapctForecastAccuracyResponse>;
    /**
     * postInventoryInventoryTurnover - Inventroy Turn-over
     *
     * Inventroy Turn-over
    **/
    postInventoryInventoryTurnover(req: operations.PostInventoryInventoryTurnoverRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryInventoryTurnoverResponse>;
    /**
     * postInventoryLtd - Calculate lead time demand
     *
     * Calculate lead time demand
    **/
    postInventoryLtd(req: operations.PostInventoryLtdRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryLtdResponse>;
    /**
     * postInventoryMoq - Calculate minimum order quantity
     *
     * Calculate minimum order quantity
    **/
    postInventoryMoq(req: operations.PostInventoryMoqRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryMoqResponse>;
    /**
     * postInventoryOptimalServiceLevel - Calculate optimal service level
     *
     * Calculate optimal service level
    **/
    postInventoryOptimalServiceLevel(req: operations.PostInventoryOptimalServiceLevelRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryOptimalServiceLevelResponse>;
    /**
     * postInventoryReorderPoint - Re-order Point
     *
     * Re-order Point
    **/
    postInventoryReorderPoint(req: operations.PostInventoryReorderPointRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryReorderPointResponse>;
    /**
     * postInventorySafetyStock - Safety Stock
     *
     * Safety Stock
    **/
    postInventorySafetyStock(req: operations.PostInventorySafetyStockRequest, config?: AxiosRequestConfig): Promise<operations.PostInventorySafetyStockResponse>;
    /**
     * postInventoryServiceLevel - Calculate service level
     *
     * Calculate service level
    **/
    postInventoryServiceLevel(req: operations.PostInventoryServiceLevelRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryServiceLevelResponse>;
    /**
     * postInventoryTurns - Calculate inventory turns
     *
     * Calculate inventory turns
    **/
    postInventoryTurns(req: operations.PostInventoryTurnsRequest, config?: AxiosRequestConfig): Promise<operations.PostInventoryTurnsResponse>;
    /**
     * postLifecycleManyToOne - Map from old product to new product to create artifical history
     *
     * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
    **/
    postLifecycleManyToOne(req: operations.PostLifecycleManyToOneRequest, config?: AxiosRequestConfig): Promise<operations.PostLifecycleManyToOneResponse>;
    /**
     * postLifecycleOneToOne - Map from old product to new product to create artifical history
     *
     * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
    **/
    postLifecycleOneToOne(req: operations.PostLifecycleOneToOneRequest, config?: AxiosRequestConfig): Promise<operations.PostLifecycleOneToOneResponse>;
    /**
     * postOutlier - Get outlier
     *
     * Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.
    **/
    postOutlier(req: operations.PostOutlierRequest, config?: AxiosRequestConfig): Promise<operations.PostOutlierResponse>;
    /**
     * postPortfolio - ABCxyz Analysis
     *
     * Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.
    **/
    postPortfolio(req: operations.PostPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioResponse>;
    /**
     * postPortfolioAbc - ABC Analysis
     *
     * Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.
    **/
    postPortfolioAbc(req: operations.PostPortfolioAbcRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAbcResponse>;
    /**
     * postPortfolioForecastPerformanceRewind - Planning level rewind to calculate and measure performance potential (internal versus iCUE).
     *
     * Planning level rewind to calculate and measure performance potential (internal versus iCUE).
    **/
    postPortfolioForecastPerformanceRewind(req: operations.PostPortfolioForecastPerformanceRewindRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioForecastPerformanceRewindResponse>;
    /**
     * postPortfolioXyz - xyz Analysis
     *
     * Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.
    **/
    postPortfolioXyz(req: operations.PostPortfolioXyzRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioXyzResponse>;
    /**
     * postPricingBundlePricing - Bundle pricing
     *
     * Bundle pricing
    **/
    postPricingBundlePricing(req: operations.PostPricingBundlePricingRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingBundlePricingResponse>;
    postPricingCompetitivePricing(req: operations.PostPricingCompetitivePricingRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingCompetitivePricingResponse>;
    postPricingCostPlusPricing(req: operations.PostPricingCostPlusPricingRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingCostPlusPricingResponse>;
    postPricingDecoyPricing(req: operations.PostPricingDecoyPricingRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingDecoyPricingResponse>;
    postPricingOddPricing(req: operations.PostPricingOddPricingRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingOddPricingResponse>;
    postPricingPenetrationPricing(req: operations.PostPricingPenetrationPricingRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingPenetrationPricingResponse>;
    postPricingPriceElasticityOfDemand(req: operations.PostPricingPriceElasticityOfDemandRequest, config?: AxiosRequestConfig): Promise<operations.PostPricingPriceElasticityOfDemandResponse>;
    /**
     * putAdministrationEntity - Pause organization
     *
     * This is a iCUE only endpoint or Enterprise feature.
    **/
    putAdministrationEntity(req: operations.PutAdministrationEntityRequest, config?: AxiosRequestConfig): Promise<operations.PutAdministrationEntityResponse>;
    /**
     * putAdministrationUser - Update user
     *
     * Update user
    **/
    putAdministrationUser(req: operations.PutAdministrationUserRequest, config?: AxiosRequestConfig): Promise<operations.PutAdministrationUserResponse>;
    /**
     * putAdministrationUserLock - Lock user
     *
     * After lock user won't be able to use iCUE API endpoints.
    **/
    putAdministrationUserLock(req: operations.PutAdministrationUserLockRequest, config?: AxiosRequestConfig): Promise<operations.PutAdministrationUserLockResponse>;
}
export {};
