import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";
export declare class PosCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    inventory?: PosInventory;
    kind?: string;
    sale?: PosSale;
    store?: PosStore;
}
