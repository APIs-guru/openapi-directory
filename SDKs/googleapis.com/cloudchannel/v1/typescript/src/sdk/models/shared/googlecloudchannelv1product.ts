import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";



// GoogleCloudChannelV1Product
/** 
 * A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
**/
export class GoogleCloudChannelV1Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=marketingInfo" })
  marketingInfo?: GoogleCloudChannelV1MarketingInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
