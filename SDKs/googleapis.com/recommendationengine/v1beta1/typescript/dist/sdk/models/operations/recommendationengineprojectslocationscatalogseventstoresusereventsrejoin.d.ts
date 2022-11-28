import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
