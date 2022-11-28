import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { RegionalInventory } from "./regionalinventory";
/**
 * A batch entry encoding a single non-batch regional inventory response.
**/
export declare class RegionalinventoryCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
    regionalInventory?: RegionalInventory;
}
