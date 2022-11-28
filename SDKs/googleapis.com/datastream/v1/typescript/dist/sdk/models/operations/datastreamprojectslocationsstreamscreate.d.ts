import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsStreamsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    streamId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DatastreamProjectsLocationsStreamsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsCreateRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsCreatePathParams;
    queryParams: DatastreamProjectsLocationsStreamsCreateQueryParams;
    request?: shared.StreamInput;
    security: DatastreamProjectsLocationsStreamsCreateSecurity;
}
export declare class DatastreamProjectsLocationsStreamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
