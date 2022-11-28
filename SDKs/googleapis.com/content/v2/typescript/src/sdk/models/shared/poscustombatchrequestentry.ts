import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";



export class PosCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: PosInventory;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=sale" })
  sale?: PosSale;

  @SpeakeasyMetadata({ data: "json, name=store" })
  store?: PosStore;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetMerchantId" })
  targetMerchantId?: string;
}
