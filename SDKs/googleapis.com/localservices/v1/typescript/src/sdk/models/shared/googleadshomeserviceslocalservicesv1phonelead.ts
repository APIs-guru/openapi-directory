import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAdsHomeservicesLocalservicesV1PhoneLead
/** 
 * Container for phone lead specific information.
**/
export class GoogleAdsHomeservicesLocalservicesV1PhoneLead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargedCallTimestamp" })
  chargedCallTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=chargedConnectedCallDurationSeconds" })
  chargedConnectedCallDurationSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerPhoneNumber" })
  consumerPhoneNumber?: string;
}
