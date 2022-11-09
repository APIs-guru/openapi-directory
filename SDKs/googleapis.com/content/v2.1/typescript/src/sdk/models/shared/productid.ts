import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductId
/** 
 * The Content API ID of the product.
**/
export class ProductId extends SpeakeasyBase {
  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
