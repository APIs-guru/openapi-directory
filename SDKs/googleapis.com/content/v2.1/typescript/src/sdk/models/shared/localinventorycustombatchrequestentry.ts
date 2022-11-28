import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalInventory } from "./localinventory";



// LocalinventoryCustomBatchRequestEntry
/** 
 * Batch entry encoding a single local inventory update request.
**/
export class LocalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=localInventory" })
  localInventory?: LocalInventory;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
