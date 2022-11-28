import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
/**
 * Response for the ListExecutions method.
**/
export declare class ListExecutionsResponse extends SpeakeasyBase {
    executions?: Execution[];
    nextPageToken?: string;
}
