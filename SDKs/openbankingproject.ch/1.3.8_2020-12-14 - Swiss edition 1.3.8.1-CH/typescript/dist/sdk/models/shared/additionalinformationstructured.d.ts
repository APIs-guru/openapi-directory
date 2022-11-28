import { SpeakeasyBase } from "../../../internal/utils";
import { StandingOrderDetails } from "./standingorderdetails";
/**
 * Is used if and only if the bookingStatus entry equals "information".
 * Every active standing order related to the dedicated payment account result into one entry.
 *
**/
export declare class AdditionalInformationStructured extends SpeakeasyBase {
    standingOrderDetails: StandingOrderDetails;
}
