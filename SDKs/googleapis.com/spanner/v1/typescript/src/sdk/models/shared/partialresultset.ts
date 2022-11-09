import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { ResultSetStats } from "./resultsetstats";


// PartialResultSet
/** 
 * Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.
**/
export class PartialResultSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=chunkedValue" })
  chunkedValue?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResultSetMetadata;

  @Metadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @Metadata({ data: "json, name=stats" })
  stats?: ResultSetStats;

  @Metadata({ data: "json, name=values" })
  values?: any[];
}
