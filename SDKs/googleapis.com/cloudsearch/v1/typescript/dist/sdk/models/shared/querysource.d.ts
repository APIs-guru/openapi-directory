import { SpeakeasyBase } from "../../../internal/utils";
import { QueryOperator } from "./queryoperator";
import { Source } from "./source";
/**
 * List of sources that the user can search using the query API.
**/
export declare class QuerySource extends SpeakeasyBase {
    displayName?: string;
    operators?: QueryOperator[];
    shortName?: string;
    source?: Source;
}
