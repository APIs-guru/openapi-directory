import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalPeeringsGetPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalPeeringsGetQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse extends SpeakeasyBase {
    contentType: string;
    peering?: shared.Peering;
    statusCode: number;
}
