import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Date } from "./date";
import { ItemCountByStatus } from "./itemcountbystatus";


// CustomerIndexStats
/** 
 * Aggregation of items by status code as of the specified date.
**/
export class CustomerIndexStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=itemCountByStatus", elemType: shared.ItemCountByStatus })
  itemCountByStatus?: ItemCountByStatus[];
}
