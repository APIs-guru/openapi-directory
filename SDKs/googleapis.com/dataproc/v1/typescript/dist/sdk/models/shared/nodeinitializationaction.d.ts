import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an executable to run on a fully configured node and a timeout period for executable completion.
**/
export declare class NodeInitializationAction extends SpeakeasyBase {
    executableFile?: string;
    executionTimeout?: string;
}
