import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsRecommendersRecommendationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsListRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsRecommendersRecommendationsListPathParams;
    queryParams: RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams;
    security: RecommenderProjectsLocationsRecommendersRecommendationsListSecurity;
}
export declare class RecommenderProjectsLocationsRecommendersRecommendationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1beta1ListRecommendationsResponse?: shared.GoogleCloudRecommenderV1beta1ListRecommendationsResponse;
    statusCode: number;
}
