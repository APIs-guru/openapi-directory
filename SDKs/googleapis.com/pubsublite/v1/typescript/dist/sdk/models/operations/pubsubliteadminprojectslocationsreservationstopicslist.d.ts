import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsReservationsTopicsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsReservationsTopicsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsReservationsTopicsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsReservationsTopicsListRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsReservationsTopicsListPathParams;
    queryParams: PubsubliteAdminProjectsLocationsReservationsTopicsListQueryParams;
    security: PubsubliteAdminProjectsLocationsReservationsTopicsListSecurity;
}
export declare class PubsubliteAdminProjectsLocationsReservationsTopicsListResponse extends SpeakeasyBase {
    contentType: string;
    listReservationTopicsResponse?: shared.ListReservationTopicsResponse;
    statusCode: number;
}
