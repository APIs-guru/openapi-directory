import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsReservationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteAdminProjectsLocationsReservationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    reservationId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsReservationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsReservationsCreateRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsReservationsCreatePathParams;
    queryParams: PubsubliteAdminProjectsLocationsReservationsCreateQueryParams;
    request?: shared.Reservation;
    security: PubsubliteAdminProjectsLocationsReservationsCreateSecurity;
}
export declare class PubsubliteAdminProjectsLocationsReservationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    reservation?: shared.Reservation;
    statusCode: number;
}
