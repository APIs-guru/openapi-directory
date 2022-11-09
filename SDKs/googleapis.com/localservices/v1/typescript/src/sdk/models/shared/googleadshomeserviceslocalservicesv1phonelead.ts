import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAdsHomeservicesLocalservicesV1PhoneLead
/** 
 * Container for phone lead specific information.
**/
export class GoogleAdsHomeservicesLocalservicesV1PhoneLead extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargedCallTimestamp" })
  chargedCallTimestamp?: string;

  @Metadata({ data: "json, name=chargedConnectedCallDurationSeconds" })
  chargedConnectedCallDurationSeconds?: string;

  @Metadata({ data: "json, name=consumerPhoneNumber" })
  consumerPhoneNumber?: string;
}
