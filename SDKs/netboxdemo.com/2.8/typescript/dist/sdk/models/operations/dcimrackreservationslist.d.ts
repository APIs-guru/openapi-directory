import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackReservationsListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGt?: string;
    createdGte?: string;
    createdLt?: string;
    createdLte?: string;
    createdN?: string;
    group?: string;
    groupN?: string;
    groupId?: string;
    groupIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    offset?: number;
    q?: string;
    rackId?: string;
    rackIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    tenant?: string;
    tenantN?: string;
    tenantGroup?: string;
    tenantGroupN?: string;
    tenantGroupId?: string;
    tenantGroupIdN?: string;
    tenantId?: string;
    tenantIdN?: string;
    user?: string;
    userN?: string;
    userId?: string;
    userIdN?: string;
}
export declare class DcimRackReservationsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RackReservation[];
}
export declare class DcimRackReservationsListRequest extends SpeakeasyBase {
    queryParams: DcimRackReservationsListQueryParams;
}
export declare class DcimRackReservationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRackReservationsList200ApplicationJsonObject?: DcimRackReservationsList200ApplicationJson;
}
