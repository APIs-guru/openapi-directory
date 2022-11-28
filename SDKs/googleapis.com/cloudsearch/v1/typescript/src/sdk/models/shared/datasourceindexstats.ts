import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ItemCountByStatus } from "./itemcountbystatus";



// DataSourceIndexStats
/** 
 * Aggregation of items by status code as of the specified date.
**/
export class DataSourceIndexStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=itemCountByStatus", elemType: ItemCountByStatus })
  itemCountByStatus?: ItemCountByStatus[];
}
