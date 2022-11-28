import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Seats
/** 
 * JSON template for subscription seats.
**/
export class Seats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=licensedNumberOfSeats" })
  licensedNumberOfSeats?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumNumberOfSeats" })
  maximumNumberOfSeats?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfSeats" })
  numberOfSeats?: number;
}
