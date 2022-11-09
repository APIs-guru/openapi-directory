import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalInventory } from "./localinventory";


// LocalinventoryCustomBatchRequestEntry
/** 
 * Batch entry encoding a single local inventory update request.
**/
export class LocalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=localInventory" })
  localInventory?: LocalInventory;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
