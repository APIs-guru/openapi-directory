import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItemInput } from "./lineitem";



// BulkUpdateLineItemsRequestInput
/** 
 * Request message for LineItemService.BulkUpdateLineItems.
**/
export class BulkUpdateLineItemsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetLineItem" })
  targetLineItem?: LineItemInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
