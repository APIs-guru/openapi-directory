import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";
/**
 * An execute sql query request containing the query and the connection to execute it on.
**/
export declare class ExecuteSqlQueryRequest extends SpeakeasyBase {
    query?: Query;
}
