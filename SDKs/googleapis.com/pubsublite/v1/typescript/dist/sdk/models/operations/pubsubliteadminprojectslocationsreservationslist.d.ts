import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsReservationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteAdminProjectsLocationsReservationsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteAdminProjectsLocationsReservationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsReservationsListRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsReservationsListPathParams;
    queryParams: PubsubliteAdminProjectsLocationsReservationsListQueryParams;
    security: PubsubliteAdminProjectsLocationsReservationsListSecurity;
}
export declare class PubsubliteAdminProjectsLocationsReservationsListResponse extends SpeakeasyBase {
    contentType: string;
    listReservationsResponse?: shared.ListReservationsResponse;
    statusCode: number;
}
