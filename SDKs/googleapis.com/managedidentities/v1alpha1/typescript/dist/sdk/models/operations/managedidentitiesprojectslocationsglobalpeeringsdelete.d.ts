import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalPeeringsDeletePathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
