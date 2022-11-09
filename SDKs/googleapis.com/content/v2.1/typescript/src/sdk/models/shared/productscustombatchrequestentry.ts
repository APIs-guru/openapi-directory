import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Product } from "./product";


// ProductsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch products request.
**/
export class ProductsCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=feedId" })
  feedId?: string;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=product" })
  product?: Product;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
