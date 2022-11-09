import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1CloudIdentityCustomerAccount
/** 
 * Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
**/
export class GoogleCloudChannelV1CloudIdentityCustomerAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerCloudIdentityId" })
  customerCloudIdentityId?: string;

  @Metadata({ data: "json, name=customerName" })
  customerName?: string;

  @Metadata({ data: "json, name=existing" })
  existing?: boolean;

  @Metadata({ data: "json, name=owned" })
  owned?: boolean;
}
