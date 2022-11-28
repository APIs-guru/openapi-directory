import { SpeakeasyBase } from "../../../internal/utils";
import { TableSchema } from "./tableschema";
/**
 * Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.
**/
export declare class QueryResult extends SpeakeasyBase {
    nextPageToken?: string;
    rows?: Map<string, any>[];
    schema?: TableSchema;
    totalRows?: string;
}
