import { SpeakeasyBase } from "../../../internal/utils";
import { Function } from "./function";
/**
 * Response for the `ListFunctions` method.
**/
export declare class ListFunctionsResponse extends SpeakeasyBase {
    functions?: Function[];
    nextPageToken?: string;
    unreachable?: string[];
}
