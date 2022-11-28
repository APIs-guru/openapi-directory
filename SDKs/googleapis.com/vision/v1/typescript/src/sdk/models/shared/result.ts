import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";



// Result
/** 
 * Information about a product.
**/
export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: Product;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
