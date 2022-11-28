import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";
/**
 * A list of enabled built-in variables.
**/
export declare class ListEnabledBuiltInVariablesResponse extends SpeakeasyBase {
    builtInVariable?: BuiltInVariable[];
    nextPageToken?: string;
}
