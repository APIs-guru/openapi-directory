import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsObjectsLookupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsStreamsObjectsLookupQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsObjectsLookupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsObjectsLookupRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsObjectsLookupPathParams;
    queryParams: DatastreamProjectsLocationsStreamsObjectsLookupQueryParams;
    request?: shared.LookupStreamObjectRequest;
    security: DatastreamProjectsLocationsStreamsObjectsLookupSecurity;
}
export declare class DatastreamProjectsLocationsStreamsObjectsLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    streamObject?: shared.StreamObject;
}
