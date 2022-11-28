import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SandboxUser } from "./sandboxuser";



// Sandbox
/** 
 * Sandbox model
**/
export class Sandbox extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sandboxId" })
  sandboxId: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: SandboxUser })
  users?: SandboxUser[];
}
