import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastreamProjectsLocationsStreamsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatastreamProjectsLocationsStreamsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsDeleteRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsDeletePathParams;
    queryParams: DatastreamProjectsLocationsStreamsDeleteQueryParams;
    security: DatastreamProjectsLocationsStreamsDeleteSecurity;
}
export declare class DatastreamProjectsLocationsStreamsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
