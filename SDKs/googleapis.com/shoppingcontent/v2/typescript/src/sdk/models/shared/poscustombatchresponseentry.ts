import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";



export class PosCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: PosInventory;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=sale" })
  sale?: PosSale;

  @SpeakeasyMetadata({ data: "json, name=store" })
  store?: PosStore;
}
