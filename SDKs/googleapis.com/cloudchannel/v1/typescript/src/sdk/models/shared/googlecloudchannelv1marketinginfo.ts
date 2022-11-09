import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Media } from "./googlecloudchannelv1media";


// GoogleCloudChannelV1MarketingInfo
/** 
 * Represents the marketing information for a Product, SKU or Offer.
**/
export class GoogleCloudChannelV1MarketingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLogo" })
  defaultLogo?: GoogleCloudChannelV1Media;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
