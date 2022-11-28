import { SpeakeasyBase } from "../../../internal/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { ResultSetStats } from "./resultsetstats";
/**
 * Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.
**/
export declare class PartialResultSet extends SpeakeasyBase {
    chunkedValue?: boolean;
    metadata?: ResultSetMetadata;
    resumeToken?: string;
    stats?: ResultSetStats;
    values?: any[];
}
