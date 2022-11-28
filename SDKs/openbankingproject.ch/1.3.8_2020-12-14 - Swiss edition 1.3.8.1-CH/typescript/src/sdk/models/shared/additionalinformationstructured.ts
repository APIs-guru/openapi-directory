import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandingOrderDetails } from "./standingorderdetails";



// AdditionalInformationStructured
/** 
 * Is used if and only if the bookingStatus entry equals "information". 
 * Every active standing order related to the dedicated payment account result into one entry.
 * 
**/
export class AdditionalInformationStructured extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=standingOrderDetails" })
  standingOrderDetails: StandingOrderDetails;
}
