import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemInput } from "./lineitem";
/**
 * Request message for LineItemService.BulkUpdateLineItems.
**/
export declare class BulkUpdateLineItemsRequestInput extends SpeakeasyBase {
    lineItemIds?: string[];
    targetLineItem?: LineItemInput;
    updateMask?: string;
}
