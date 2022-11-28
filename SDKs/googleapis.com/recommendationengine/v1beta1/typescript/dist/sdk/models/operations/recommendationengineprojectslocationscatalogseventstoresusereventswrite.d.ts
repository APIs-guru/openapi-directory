import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1UserEvent;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1UserEvent?: shared.GoogleCloudRecommendationengineV1beta1UserEvent;
    statusCode: number;
}
