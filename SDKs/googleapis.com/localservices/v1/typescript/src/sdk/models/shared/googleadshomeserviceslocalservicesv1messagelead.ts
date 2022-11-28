import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAdsHomeservicesLocalservicesV1MessageLead
/** 
 * Container for message lead specific information.
**/
export class GoogleAdsHomeservicesLocalservicesV1MessageLead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerPhoneNumber" })
  consumerPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;
}
