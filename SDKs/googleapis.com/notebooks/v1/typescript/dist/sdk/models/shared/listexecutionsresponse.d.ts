import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
/**
 * Response for listing scheduled notebook executions
**/
export declare class ListExecutionsResponse extends SpeakeasyBase {
    executions?: Execution[];
    nextPageToken?: string;
    unreachable?: string[];
}
