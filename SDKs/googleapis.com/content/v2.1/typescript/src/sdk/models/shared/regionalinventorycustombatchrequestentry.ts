import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionalInventory } from "./regionalinventory";


// RegionalinventoryCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch regional inventory request.
**/
export class RegionalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=regionalInventory" })
  regionalInventory?: RegionalInventory;
}
