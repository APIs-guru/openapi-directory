import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandingOrderDetails } from "./standingorderdetails";


// AdditionalInformationStructured
/** 
 * Is used if and only if the bookingStatus entry equals "information". 
 * Every active standing order related to the dedicated payment account result into one entry.
 * 
**/
export class AdditionalInformationStructured extends SpeakeasyBase {
  @Metadata({ data: "json, name=standingOrderDetails" })
  standingOrderDetails: StandingOrderDetails;
}
