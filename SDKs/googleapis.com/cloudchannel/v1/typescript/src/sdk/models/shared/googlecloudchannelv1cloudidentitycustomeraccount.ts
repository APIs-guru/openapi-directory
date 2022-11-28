import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1CloudIdentityCustomerAccount
/** 
 * Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
**/
export class GoogleCloudChannelV1CloudIdentityCustomerAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerCloudIdentityId" })
  customerCloudIdentityId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=existing" })
  existing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=owned" })
  owned?: boolean;
}
