import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsObjectsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastreamProjectsLocationsStreamsObjectsGetQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsObjectsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsObjectsGetRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsObjectsGetPathParams;
    queryParams: DatastreamProjectsLocationsStreamsObjectsGetQueryParams;
    security: DatastreamProjectsLocationsStreamsObjectsGetSecurity;
}
export declare class DatastreamProjectsLocationsStreamsObjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    streamObject?: shared.StreamObject;
}
