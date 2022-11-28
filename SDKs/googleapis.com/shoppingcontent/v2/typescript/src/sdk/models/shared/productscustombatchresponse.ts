import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductsCustomBatchResponseEntry } from "./productscustombatchresponseentry";



export class ProductsCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ProductsCustomBatchResponseEntry })
  entries?: ProductsCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
