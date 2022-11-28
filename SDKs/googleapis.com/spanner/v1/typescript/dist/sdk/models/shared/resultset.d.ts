import { SpeakeasyBase } from "../../../internal/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { ResultSetStats } from "./resultsetstats";
/**
 * Results from Read or ExecuteSql.
**/
export declare class ResultSet extends SpeakeasyBase {
    metadata?: ResultSetMetadata;
    rows?: any[][];
    stats?: ResultSetStats;
}
