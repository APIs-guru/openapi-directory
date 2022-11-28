import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse?: shared.GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse;
    statusCode: number;
}
