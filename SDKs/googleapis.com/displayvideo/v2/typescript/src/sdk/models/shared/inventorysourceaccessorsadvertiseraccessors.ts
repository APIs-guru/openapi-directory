import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventorySourceAccessorsAdvertiserAccessors
/** 
 * The advertisers with access to the inventory source.
**/
export class InventorySourceAccessorsAdvertiserAccessors extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserIds" })
  advertiserIds?: string[];
}
