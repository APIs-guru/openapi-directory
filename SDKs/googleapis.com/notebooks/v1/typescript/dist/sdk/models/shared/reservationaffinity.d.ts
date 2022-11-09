import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ReservationAffinityConsumeReservationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NoReservation = "NO_RESERVATION",
    AnyReservation = "ANY_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION"
}
/**
 * Reservation Affinity for consuming Zonal reservation.
**/
export declare class ReservationAffinity extends SpeakeasyBase {
    consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;
    key?: string;
    values?: string[];
}
