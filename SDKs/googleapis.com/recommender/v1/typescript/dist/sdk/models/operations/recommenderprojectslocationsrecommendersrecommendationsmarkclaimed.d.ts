import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedQueryParams extends SpeakeasyBase {
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
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams;
    queryParams: RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedQueryParams;
    request?: shared.GoogleCloudRecommenderV1MarkRecommendationClaimedRequest;
    security: RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1Recommendation?: shared.GoogleCloudRecommenderV1Recommendation;
    statusCode: number;
}
