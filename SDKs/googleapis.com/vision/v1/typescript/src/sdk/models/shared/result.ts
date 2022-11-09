import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Product } from "./product";


// Result
/** 
 * Information about a product.
**/
export class Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=product" })
  product?: Product;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
