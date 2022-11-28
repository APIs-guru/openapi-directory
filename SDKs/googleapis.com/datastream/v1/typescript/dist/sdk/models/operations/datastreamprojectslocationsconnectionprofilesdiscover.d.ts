import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsConnectionProfilesDiscoverRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams;
    queryParams: DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams;
    request?: shared.DiscoverConnectionProfileRequestInput;
    security: DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity;
}
export declare class DatastreamProjectsLocationsConnectionProfilesDiscoverResponse extends SpeakeasyBase {
    contentType: string;
    discoverConnectionProfileResponse?: shared.DiscoverConnectionProfileResponse;
    statusCode: number;
}
