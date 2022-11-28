import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxUser } from "./sandboxuser";
/**
 * Sandbox model
**/
export declare class Sandbox extends SpeakeasyBase {
    sandboxId: string;
    users?: SandboxUser[];
}
