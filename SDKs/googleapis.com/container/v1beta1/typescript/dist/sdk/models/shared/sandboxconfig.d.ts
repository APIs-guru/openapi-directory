import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SandboxConfigTypeEnum {
    Unspecified = "UNSPECIFIED",
    Gvisor = "GVISOR"
}
/**
 * SandboxConfig contains configurations of the sandbox to use for the node.
**/
export declare class SandboxConfig extends SpeakeasyBase {
    sandboxType?: string;
    type?: SandboxConfigTypeEnum;
}
