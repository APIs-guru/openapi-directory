import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";


// GoogleCloudChannelV1Product
/** 
 * A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
**/
export class GoogleCloudChannelV1Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=marketingInfo" })
  marketingInfo?: GoogleCloudChannelV1MarketingInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
