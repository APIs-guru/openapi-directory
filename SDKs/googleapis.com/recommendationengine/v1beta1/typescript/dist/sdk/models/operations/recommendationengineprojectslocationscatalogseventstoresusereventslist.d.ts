import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1ListUserEventsResponse?: shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse;
    statusCode: number;
}
