import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQueryOptionsInput
/** 
 * Options that change functionality of a sink exporting data to BigQuery.
**/
export class BigQueryOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=usePartitionedTables" })
  usePartitionedTables?: boolean;
}


// BigQueryOptions
/** 
 * Options that change functionality of a sink exporting data to BigQuery.
**/
export class BigQueryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=usePartitionedTables" })
  usePartitionedTables?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usesTimestampColumnPartitioning" })
  usesTimestampColumnPartitioning?: boolean;
}
