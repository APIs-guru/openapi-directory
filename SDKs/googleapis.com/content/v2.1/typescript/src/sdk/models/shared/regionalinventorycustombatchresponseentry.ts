import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { RegionalInventory } from "./regionalinventory";



// RegionalinventoryCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch regional inventory response.
**/
export class RegionalinventoryCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalInventory" })
  regionalInventory?: RegionalInventory;
}
