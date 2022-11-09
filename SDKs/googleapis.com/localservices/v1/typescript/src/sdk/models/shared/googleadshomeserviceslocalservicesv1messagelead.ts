import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAdsHomeservicesLocalservicesV1MessageLead
/** 
 * Container for message lead specific information.
**/
export class GoogleAdsHomeservicesLocalservicesV1MessageLead extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerPhoneNumber" })
  consumerPhoneNumber?: string;

  @Metadata({ data: "json, name=customerName" })
  customerName?: string;

  @Metadata({ data: "json, name=jobType" })
  jobType?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;
}
