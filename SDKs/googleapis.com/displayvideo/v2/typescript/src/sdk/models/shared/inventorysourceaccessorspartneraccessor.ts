import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventorySourceAccessorsPartnerAccessor
/** 
 * The partner with access to the inventory source.
**/
export class InventorySourceAccessorsPartnerAccessor extends SpeakeasyBase {
  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
