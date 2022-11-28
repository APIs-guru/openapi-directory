import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams;
    queryParams: RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams;
    request?: shared.GoogleCloudRecommenderV1MarkInsightAcceptedRequest;
    security: RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1Insight?: shared.GoogleCloudRecommenderV1Insight;
    statusCode: number;
}
