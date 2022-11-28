import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReservationConfig
/** 
 * The settings for this topic's Reservation usage.
**/
export class ReservationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=throughputReservation" })
  throughputReservation?: string;
}
