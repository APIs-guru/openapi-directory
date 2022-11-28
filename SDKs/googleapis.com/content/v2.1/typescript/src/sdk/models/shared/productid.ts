import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductId
/** 
 * The Content API ID of the product.
**/
export class ProductId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
