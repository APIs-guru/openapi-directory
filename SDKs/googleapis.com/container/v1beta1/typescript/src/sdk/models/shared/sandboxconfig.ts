import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SandboxConfigTypeEnum {
    Unspecified = "UNSPECIFIED",
    Gvisor = "GVISOR"
}


// SandboxConfig
/** 
 * SandboxConfig contains configurations of the sandbox to use for the node.
**/
export class SandboxConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sandboxType" })
  sandboxType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SandboxConfigTypeEnum;
}
