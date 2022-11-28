import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableSchema } from "./tableschema";



// QueryResult
/** 
 * Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.
**/
export class QueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @SpeakeasyMetadata({ data: "json, name=totalRows" })
  totalRows?: string;
}
