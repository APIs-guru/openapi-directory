import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Per source result count information.
**/
export declare class SourceResultCount extends SpeakeasyBase {
    hasMoreResults?: boolean;
    resultCountEstimate?: string;
    resultCountExact?: string;
    source?: Source;
}
