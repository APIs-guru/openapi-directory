import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesCreateQueryParams extends SpeakeasyBase {
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
    routeId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsPrivateConnectionsRoutesCreatePathParams;
    queryParams: DatastreamProjectsLocationsPrivateConnectionsRoutesCreateQueryParams;
    request?: shared.RouteInput;
    security: DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
