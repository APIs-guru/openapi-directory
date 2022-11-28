import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastreamProjectsLocationsStreamsPatchQueryParams extends SpeakeasyBase {
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
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DatastreamProjectsLocationsStreamsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsPatchRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsPatchPathParams;
    queryParams: DatastreamProjectsLocationsStreamsPatchQueryParams;
    request?: shared.StreamInput;
    security: DatastreamProjectsLocationsStreamsPatchSecurity;
}
export declare class DatastreamProjectsLocationsStreamsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
