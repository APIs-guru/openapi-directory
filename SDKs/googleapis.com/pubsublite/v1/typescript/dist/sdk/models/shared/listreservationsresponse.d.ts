import { SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";
/**
 * Response for ListReservations.
**/
export declare class ListReservationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reservations?: Reservation[];
}
