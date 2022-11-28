import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventorySourceAccessorsAdvertiserAccessors
/** 
 * The advertisers with access to the inventory source.
**/
export class InventorySourceAccessorsAdvertiserAccessors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserIds" })
  advertiserIds?: string[];
}
