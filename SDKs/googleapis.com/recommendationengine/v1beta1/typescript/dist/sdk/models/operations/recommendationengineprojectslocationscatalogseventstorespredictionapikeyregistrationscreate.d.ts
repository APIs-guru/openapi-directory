import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration?: shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
    statusCode: number;
}
