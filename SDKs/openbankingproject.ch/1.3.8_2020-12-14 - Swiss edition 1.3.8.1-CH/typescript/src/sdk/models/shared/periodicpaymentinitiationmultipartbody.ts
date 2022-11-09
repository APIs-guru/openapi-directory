import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PeriodicPaymentInitiationXmlPart2StandingorderTypeJson } from "./periodicpaymentinitiationxmlpart2standingordertypejson";


// PeriodicPaymentInitiationMultipartBody
/** 
 * The multipart message definition for the initiation of a periodic payment initiation 
 * where the information of the payment is contained in a pain.001 message (Part 1) and 
 * the additional informations related to the periodic payment is an additional JSON message (Part 2).
 * 
**/
export class PeriodicPaymentInitiationMultipartBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=json_standingorderType;json=true" })
  jsonStandingorderType?: PeriodicPaymentInitiationXmlPart2StandingorderTypeJson;

  @Metadata({ data: "multipart_form, name=xml_sct;json=true" })
  xmlSct?: any;
}
