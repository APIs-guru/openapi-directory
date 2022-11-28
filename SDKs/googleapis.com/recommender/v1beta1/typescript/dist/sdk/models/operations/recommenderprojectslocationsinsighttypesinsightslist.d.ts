import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsInsightTypesInsightsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsListQueryParams extends SpeakeasyBase {
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
export declare class RecommenderProjectsLocationsInsightTypesInsightsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsListRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsInsightTypesInsightsListPathParams;
    queryParams: RecommenderProjectsLocationsInsightTypesInsightsListQueryParams;
    security: RecommenderProjectsLocationsInsightTypesInsightsListSecurity;
}
export declare class RecommenderProjectsLocationsInsightTypesInsightsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1beta1ListInsightsResponse?: shared.GoogleCloudRecommenderV1beta1ListInsightsResponse;
    statusCode: number;
}
