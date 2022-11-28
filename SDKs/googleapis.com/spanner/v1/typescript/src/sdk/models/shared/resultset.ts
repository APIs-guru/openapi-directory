import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { ResultSetStats } from "./resultsetstats";



// ResultSet
/** 
 * Results from Read or ExecuteSql.
**/
export class ResultSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResultSetMetadata;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: any[][];

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: ResultSetStats;
}
