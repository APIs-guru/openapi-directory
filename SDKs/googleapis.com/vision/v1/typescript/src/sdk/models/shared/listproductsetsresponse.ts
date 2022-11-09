import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductSet } from "./productset";


// ListProductSetsResponse
/** 
 * Response message for the `ListProductSets` method.
**/
export class ListProductSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=productSets", elemType: shared.ProductSet })
  productSets?: ProductSet[];
}
