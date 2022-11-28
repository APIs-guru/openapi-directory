import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams;
    request?: shared.GoogleCloudDiscoveryengineV1alphaUserEvent;
    security: DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDiscoveryengineV1alphaUserEvent?: shared.GoogleCloudDiscoveryengineV1alphaUserEvent;
    statusCode: number;
}
