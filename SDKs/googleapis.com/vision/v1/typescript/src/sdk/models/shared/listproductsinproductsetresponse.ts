import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Product } from "./product";


// ListProductsInProductSetResponse
/** 
 * Response message for the `ListProductsInProductSet` method.
**/
export class ListProductsInProductSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=products", elemType: shared.Product })
  products?: Product[];
}
