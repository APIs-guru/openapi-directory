import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Product } from "./product";



// ProductsCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch products response.
**/
export class ProductsCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: Product;
}
