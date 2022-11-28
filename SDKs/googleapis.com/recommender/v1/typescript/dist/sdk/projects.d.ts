import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * recommenderProjectsLocationsInsightTypesInsightsList - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
    **/
    recommenderProjectsLocationsInsightTypesInsightsList(req: operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse>;
    /**
     * recommenderProjectsLocationsInsightTypesInsightsMarkAccepted - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
    **/
    recommenderProjectsLocationsInsightTypesInsightsMarkAccepted(req: operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse>;
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsGet - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
    **/
    recommenderProjectsLocationsRecommendersRecommendationsGet(req: operations.RecommenderProjectsLocationsRecommendersRecommendationsGetRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse>;
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsList - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
    **/
    recommenderProjectsLocationsRecommendersRecommendationsList(req: operations.RecommenderProjectsLocationsRecommendersRecommendationsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse>;
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
    **/
    recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed(req: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse>;
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsMarkFailed - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
    **/
    recommenderProjectsLocationsRecommendersRecommendationsMarkFailed(req: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse>;
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
    **/
    recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded(req: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse>;
    /**
     * recommenderProjectsLocationsRecommendersUpdateConfig - Updates a Recommender Config. This will create a new revision of the config.
    **/
    recommenderProjectsLocationsRecommendersUpdateConfig(req: operations.RecommenderProjectsLocationsRecommendersUpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse>;
}
