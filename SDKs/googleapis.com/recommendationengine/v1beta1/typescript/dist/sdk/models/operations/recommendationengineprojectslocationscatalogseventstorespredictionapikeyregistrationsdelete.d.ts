import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeletePathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
