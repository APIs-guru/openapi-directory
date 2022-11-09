import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Seats
/** 
 * JSON template for subscription seats.
**/
export class Seats extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=licensedNumberOfSeats" })
  licensedNumberOfSeats?: number;

  @Metadata({ data: "json, name=maximumNumberOfSeats" })
  maximumNumberOfSeats?: number;

  @Metadata({ data: "json, name=numberOfSeats" })
  numberOfSeats?: number;
}
