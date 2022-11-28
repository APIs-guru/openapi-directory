import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    ets?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    uri?: string;
    userEvent?: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}
