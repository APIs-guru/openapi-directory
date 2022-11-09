import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReservationAffinityConsumeReservationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    NoReservation = "NO_RESERVATION"
,    AnyReservation = "ANY_RESERVATION"
,    SpecificReservation = "SPECIFIC_RESERVATION"
}


// ReservationAffinity
/** 
 * Reservation Affinity for consuming Zonal reservation.
**/
export class ReservationAffinity extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumeReservationType" })
  consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
