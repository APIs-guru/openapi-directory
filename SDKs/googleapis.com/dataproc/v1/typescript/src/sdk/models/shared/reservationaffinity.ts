import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReservationAffinityConsumeReservationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NoReservation = "NO_RESERVATION",
    AnyReservation = "ANY_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION"
}


// ReservationAffinity
/** 
 * Reservation Affinity for consuming Zonal reservation.
**/
export class ReservationAffinity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumeReservationType" })
  consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
