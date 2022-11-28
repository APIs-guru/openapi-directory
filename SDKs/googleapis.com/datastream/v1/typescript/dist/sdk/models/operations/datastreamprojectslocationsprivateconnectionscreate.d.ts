import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsPrivateConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    privateConnectionId?: string;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsPrivateConnectionsCreatePathParams;
    queryParams: DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams;
    request?: shared.PrivateConnectionInput;
    security: DatastreamProjectsLocationsPrivateConnectionsCreateSecurity;
}
export declare class DatastreamProjectsLocationsPrivateConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
