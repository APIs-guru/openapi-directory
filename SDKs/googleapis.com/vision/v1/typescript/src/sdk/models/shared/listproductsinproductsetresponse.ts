import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";



// ListProductsInProductSetResponse
/** 
 * Response message for the `ListProductsInProductSet` method.
**/
export class ListProductsInProductSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: Product })
  products?: Product[];
}
