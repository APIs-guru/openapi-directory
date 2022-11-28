import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackReservationsListQueryParams extends SpeakeasyBase {
    created?: string;
    group?: string;
    groupId?: string;
    idIn?: string;
    limit?: number;
    offset?: number;
    q?: string;
    rackId?: string;
    site?: string;
    siteId?: string;
    tenant?: string;
    tenantId?: string;
    user?: string;
    userId?: string;
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
