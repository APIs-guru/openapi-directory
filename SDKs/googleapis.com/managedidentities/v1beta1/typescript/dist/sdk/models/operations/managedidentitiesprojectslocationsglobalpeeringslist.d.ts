import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalPeeringsListPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalPeeringsListQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse extends SpeakeasyBase {
    contentType: string;
    listPeeringsResponse?: shared.ListPeeringsResponse;
    statusCode: number;
}
