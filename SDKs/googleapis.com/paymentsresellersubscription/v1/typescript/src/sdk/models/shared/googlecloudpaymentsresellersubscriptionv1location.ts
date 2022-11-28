import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPaymentsResellerSubscriptionV1Location
/** 
 * Describes a location of an end user.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
