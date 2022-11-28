import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsRecommendersRecommendationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsGetQueryParams extends SpeakeasyBase {
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
export declare class RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsGetRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsRecommendersRecommendationsGetPathParams;
    queryParams: RecommenderProjectsLocationsRecommendersRecommendationsGetQueryParams;
    security: RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1Recommendation?: shared.GoogleCloudRecommenderV1Recommendation;
    statusCode: number;
}
