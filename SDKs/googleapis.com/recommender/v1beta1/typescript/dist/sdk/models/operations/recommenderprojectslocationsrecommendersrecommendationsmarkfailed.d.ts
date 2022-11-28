import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams extends SpeakeasyBase {
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
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams;
    queryParams: RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams;
    request?: shared.GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
    security: RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1beta1Recommendation?: shared.GoogleCloudRecommenderV1beta1Recommendation;
    statusCode: number;
}
