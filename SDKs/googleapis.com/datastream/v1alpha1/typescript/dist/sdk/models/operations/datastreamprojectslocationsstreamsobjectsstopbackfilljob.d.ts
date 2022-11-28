import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams extends SpeakeasyBase {
    object: string;
}
export declare class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams;
    queryParams: DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams;
    security: DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity;
}
export declare class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stopBackfillJobResponse?: shared.StopBackfillJobResponse;
}
