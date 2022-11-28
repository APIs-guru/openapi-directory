import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionalInventory } from "./regionalinventory";



// RegionalinventoryCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch regional inventory request.
**/
export class RegionalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalInventory" })
  regionalInventory?: RegionalInventory;
}
