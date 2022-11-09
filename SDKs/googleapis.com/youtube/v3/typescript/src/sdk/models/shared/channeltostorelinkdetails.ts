import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelToStoreLinkDetails
/** 
 * Information specific to a store on a merchandising platform linked to a YouTube channel.
**/
export class ChannelToStoreLinkDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=storeName" })
  storeName?: string;

  @Metadata({ data: "json, name=storeUrl" })
  storeUrl?: string;
}
