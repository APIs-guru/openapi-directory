import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";


export class PosCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=inventory" })
  inventory?: PosInventory;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=sale" })
  sale?: PosSale;

  @Metadata({ data: "json, name=store" })
  store?: PosStore;

  @Metadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @Metadata({ data: "json, name=targetMerchantId" })
  targetMerchantId?: string;
}
