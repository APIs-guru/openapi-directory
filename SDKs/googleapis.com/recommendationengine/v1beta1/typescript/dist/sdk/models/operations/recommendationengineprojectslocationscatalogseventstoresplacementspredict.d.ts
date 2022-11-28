import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1PredictRequest;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1PredictResponse?: shared.GoogleCloudRecommendationengineV1beta1PredictResponse;
    statusCode: number;
}
