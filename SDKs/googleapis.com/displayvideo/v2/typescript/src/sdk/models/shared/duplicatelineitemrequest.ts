import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DuplicateLineItemRequest
/** 
 * Request message for LineItemService.DuplicateLineItem.
**/
export class DuplicateLineItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetDisplayName" })
  targetDisplayName?: string;
}
