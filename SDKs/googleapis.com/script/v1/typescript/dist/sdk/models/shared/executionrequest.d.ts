import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.
**/
export declare class ExecutionRequest extends SpeakeasyBase {
    devMode?: boolean;
    function?: string;
    parameters?: any[];
    sessionState?: string;
}
