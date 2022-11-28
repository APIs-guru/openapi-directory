import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductsCustomBatchRequestEntry } from "./productscustombatchrequestentry";



export class ProductsCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ProductsCustomBatchRequestEntry })
  entries?: ProductsCustomBatchRequestEntry[];
}
