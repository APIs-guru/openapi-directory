import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";
import { RegionalInventory } from "./regionalinventory";


// RegionalinventoryCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch regional inventory response.
**/
export class RegionalinventoryCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=regionalInventory" })
  regionalInventory?: RegionalInventory;
}
