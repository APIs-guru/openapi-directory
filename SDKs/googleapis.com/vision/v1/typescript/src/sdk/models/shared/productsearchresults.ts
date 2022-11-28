import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupedResult } from "./groupedresult";
import { Result } from "./result";



// ProductSearchResults
/** 
 * Results for a product search request.
**/
export class ProductSearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @SpeakeasyMetadata({ data: "json, name=productGroupedResults", elemType: GroupedResult })
  productGroupedResults?: GroupedResult[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Result })
  results?: Result[];
}
