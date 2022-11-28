import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams extends SpeakeasyBase {
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
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams;
    queryParams: RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams;
    request?: shared.GoogleCloudRecommenderV1MarkRecommendationSucceededRequest;
    security: RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1Recommendation?: shared.GoogleCloudRecommenderV1Recommendation;
    statusCode: number;
}
