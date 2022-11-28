import { SpeakeasyBase } from "../../../internal/utils";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";
export declare class PosCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    inventory?: PosInventory;
    merchantId?: string;
    method?: string;
    sale?: PosSale;
    store?: PosStore;
    storeCode?: string;
    targetMerchantId?: string;
}
