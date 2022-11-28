import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams;
    request?: shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
    security: DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
