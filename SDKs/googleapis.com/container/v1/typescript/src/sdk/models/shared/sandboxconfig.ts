import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SandboxConfigTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Gvisor = "GVISOR"
}


// SandboxConfig
/** 
 * SandboxConfig contains configurations of the sandbox to use for the node.
**/
export class SandboxConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: SandboxConfigTypeEnum;
}
