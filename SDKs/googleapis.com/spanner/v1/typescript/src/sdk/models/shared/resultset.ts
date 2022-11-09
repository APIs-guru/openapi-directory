import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { ResultSetStats } from "./resultsetstats";


// ResultSet
/** 
 * Results from Read or ExecuteSql.
**/
export class ResultSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: ResultSetMetadata;

  @Metadata({ data: "json, name=rows" })
  rows?: any[][];

  @Metadata({ data: "json, name=stats" })
  stats?: ResultSetStats;
}
