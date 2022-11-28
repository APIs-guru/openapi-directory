import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Media } from "./googlecloudchannelv1media";



// GoogleCloudChannelV1MarketingInfo
/** 
 * Represents the marketing information for a Product, SKU or Offer.
**/
export class GoogleCloudChannelV1MarketingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLogo" })
  defaultLogo?: GoogleCloudChannelV1Media;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
