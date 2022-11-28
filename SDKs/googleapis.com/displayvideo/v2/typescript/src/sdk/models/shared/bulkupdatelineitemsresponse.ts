import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// BulkUpdateLineItemsResponse
/** 
 * Response message for LineItemService.BulkUpdateLineItems.
**/
export class BulkUpdateLineItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Status })
  errors?: Status[];

  @SpeakeasyMetadata({ data: "json, name=failedLineItemIds" })
  failedLineItemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=skippedLineItemIds" })
  skippedLineItemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=updatedLineItemIds" })
  updatedLineItemIds?: string[];
}
