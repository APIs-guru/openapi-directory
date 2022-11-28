import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response message for LineItemService.BulkUpdateLineItems.
**/
export declare class BulkUpdateLineItemsResponse extends SpeakeasyBase {
    errors?: Status[];
    failedLineItemIds?: string[];
    skippedLineItemIds?: string[];
    updatedLineItemIds?: string[];
}
