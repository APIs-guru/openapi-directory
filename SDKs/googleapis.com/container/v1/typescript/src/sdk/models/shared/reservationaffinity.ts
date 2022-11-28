import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReservationAffinityConsumeReservationTypeEnum {
    Unspecified = "UNSPECIFIED",
    NoReservation = "NO_RESERVATION",
    AnyReservation = "ANY_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION"
}


// ReservationAffinity
/** 
 * [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
**/
export class ReservationAffinity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumeReservationType" })
  consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
