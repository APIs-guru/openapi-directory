import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelToStoreLinkDetails
/** 
 * Information specific to a store on a merchandising platform linked to a YouTube channel.
**/
export class ChannelToStoreLinkDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=storeName" })
  storeName?: string;

  @SpeakeasyMetadata({ data: "json, name=storeUrl" })
  storeUrl?: string;
}
