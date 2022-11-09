import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReservationConfig
/** 
 * The settings for this topic's Reservation usage.
**/
export class ReservationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=throughputReservation" })
  throughputReservation?: string;
}
