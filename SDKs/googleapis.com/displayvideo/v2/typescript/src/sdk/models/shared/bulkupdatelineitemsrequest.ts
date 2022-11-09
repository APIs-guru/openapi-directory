import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LineItem } from "./lineitem";


// BulkUpdateLineItemsRequest
/** 
 * Request message for LineItemService.BulkUpdateLineItems.
**/
export class BulkUpdateLineItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];

  @Metadata({ data: "json, name=targetLineItem" })
  targetLineItem?: LineItem;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
