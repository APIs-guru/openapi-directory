import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQueryOptions
/** 
 * Options that change functionality of a sink exporting data to BigQuery.
**/
export class BigQueryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=usePartitionedTables" })
  usePartitionedTables?: boolean;

  @Metadata({ data: "json, name=usesTimestampColumnPartitioning" })
  usesTimestampColumnPartitioning?: boolean;
}
