import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductSet } from "./productset";



// ListProductSetsResponse
/** 
 * Response message for the `ListProductSets` method.
**/
export class ListProductSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=productSets", elemType: ProductSet })
  productSets?: ProductSet[];
}
