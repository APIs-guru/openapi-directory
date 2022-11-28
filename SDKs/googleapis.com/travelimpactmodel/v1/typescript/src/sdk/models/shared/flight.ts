import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// Flight
/** 
 * All details related to a single request item for a direct flight emission estimates.
**/
export class Flight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=departureDate" })
  departureDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=flightNumber" })
  flightNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=operatingCarrierCode" })
  operatingCarrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;
}
