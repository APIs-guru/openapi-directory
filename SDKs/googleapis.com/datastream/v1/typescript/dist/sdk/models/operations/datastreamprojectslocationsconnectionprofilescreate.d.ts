import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsConnectionProfilesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsConnectionProfilesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectionProfileId?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DatastreamProjectsLocationsConnectionProfilesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsConnectionProfilesCreateRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsConnectionProfilesCreatePathParams;
    queryParams: DatastreamProjectsLocationsConnectionProfilesCreateQueryParams;
    request?: shared.ConnectionProfileInput;
    security: DatastreamProjectsLocationsConnectionProfilesCreateSecurity;
}
export declare class DatastreamProjectsLocationsConnectionProfilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
