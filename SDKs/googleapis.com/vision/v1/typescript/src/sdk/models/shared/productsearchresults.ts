import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupedResult } from "./groupedresult";
import { Result } from "./result";


// ProductSearchResults
/** 
 * Results for a product search request.
**/
export class ProductSearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @Metadata({ data: "json, name=productGroupedResults", elemType: shared.GroupedResult })
  productGroupedResults?: GroupedResult[];

  @Metadata({ data: "json, name=results", elemType: shared.Result })
  results?: Result[];
}
