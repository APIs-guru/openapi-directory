import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReservationAffinityConsumeReservationTypeEnum {
    Unspecified = "UNSPECIFIED",
    NoReservation = "NO_RESERVATION",
    AnyReservation = "ANY_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION"
}
/**
 * [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
**/
export declare class ReservationAffinity extends SpeakeasyBase {
    consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;
    key?: string;
    values?: string[];
}
