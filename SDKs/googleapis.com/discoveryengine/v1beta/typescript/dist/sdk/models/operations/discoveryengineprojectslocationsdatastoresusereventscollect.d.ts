import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams;
    security: DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}
