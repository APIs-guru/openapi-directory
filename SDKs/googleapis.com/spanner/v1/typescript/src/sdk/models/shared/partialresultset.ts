import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { ResultSetStats } from "./resultsetstats";



// PartialResultSet
/** 
 * Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.
**/
export class PartialResultSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chunkedValue" })
  chunkedValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResultSetMetadata;

  @SpeakeasyMetadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: ResultSetStats;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[];
}
