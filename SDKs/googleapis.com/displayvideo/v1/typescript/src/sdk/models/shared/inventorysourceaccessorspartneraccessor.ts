import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventorySourceAccessorsPartnerAccessor
/** 
 * The partner with access to the inventory source.
**/
export class InventorySourceAccessorsPartnerAccessor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
