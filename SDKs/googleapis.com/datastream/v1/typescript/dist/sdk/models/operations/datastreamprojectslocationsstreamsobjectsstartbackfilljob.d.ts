import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobPathParams extends SpeakeasyBase {
    object: string;
}
export declare class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsObjectsStartBackfillJobPathParams;
    queryParams: DatastreamProjectsLocationsStreamsObjectsStartBackfillJobQueryParams;
    request?: Map<string, any>;
    security: DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity;
}
export declare class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse extends SpeakeasyBase {
    contentType: string;
    startBackfillJobResponse?: shared.StartBackfillJobResponse;
    statusCode: number;
}
