import { SpeakeasyBase } from "../../../internal/utils";
import { ResultTableColumnHeader } from "./resulttablecolumnheader";
import { Errors } from "./errors";
/**
 * Response message for TargetedQueriesService.Query.
**/
export declare class QueryResponse extends SpeakeasyBase {
    columnHeaders?: ResultTableColumnHeader[];
    errors?: Errors;
    kind?: string;
    rows?: any[][];
}
