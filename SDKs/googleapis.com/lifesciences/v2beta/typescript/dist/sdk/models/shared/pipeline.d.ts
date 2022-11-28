import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Secret } from "./secret";
import { Resources } from "./resources";
/**
 * Specifies a series of actions to execute, expressed as Docker containers.
**/
export declare class Pipeline extends SpeakeasyBase {
    actions?: Action[];
    encryptedEnvironment?: Secret;
    environment?: Map<string, string>;
    resources?: Resources;
    timeout?: string;
}
