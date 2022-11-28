import { SpeakeasyBase } from "../../../internal/utils";
import { PeriodicPaymentInitiationXmlPart2StandingorderTypeJson } from "./periodicpaymentinitiationxmlpart2standingordertypejson";
/**
 * The multipart message definition for the initiation of a periodic payment initiation
 * where the information of the payment is contained in a pain.001 message (Part 1) and
 * the additional informations related to the periodic payment is an additional JSON message (Part 2).
 *
**/
export declare class PeriodicPaymentInitiationMultipartBody extends SpeakeasyBase {
    jsonStandingorderType?: PeriodicPaymentInitiationXmlPart2StandingorderTypeJson;
    xmlSct?: any;
}
