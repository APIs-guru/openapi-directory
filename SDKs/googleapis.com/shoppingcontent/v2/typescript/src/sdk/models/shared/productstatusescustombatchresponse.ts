import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductstatusesCustomBatchResponseEntry } from "./productstatusescustombatchresponseentry";



export class ProductstatusesCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ProductstatusesCustomBatchResponseEntry })
  entries?: ProductstatusesCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
