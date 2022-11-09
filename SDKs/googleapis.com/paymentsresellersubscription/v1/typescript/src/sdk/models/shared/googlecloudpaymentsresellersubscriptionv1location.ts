import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPaymentsResellerSubscriptionV1Location
/** 
 * Describes a location of an end user.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
