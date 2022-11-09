import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReservationAffinityConsumeReservationTypeEnum {
    Unspecified = "UNSPECIFIED"
,    NoReservation = "NO_RESERVATION"
,    AnyReservation = "ANY_RESERVATION"
,    SpecificReservation = "SPECIFIC_RESERVATION"
}


// ReservationAffinity
/** 
 * [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
**/
export class ReservationAffinity extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumeReservationType" })
  consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
