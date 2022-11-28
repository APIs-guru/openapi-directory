import { SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
/**
 * Response for the `ListVariables()` method.
**/
export declare class ListVariablesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    variables?: Variable[];
}
