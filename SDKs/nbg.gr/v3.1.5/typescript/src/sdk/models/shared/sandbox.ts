import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SandboxUser } from "./sandboxuser";


// Sandbox
/** 
 * Sandbox model
**/
export class Sandbox extends SpeakeasyBase {
  @Metadata({ data: "json, name=sandboxId" })
  sandboxId: string;

  @Metadata({ data: "json, name=users", elemType: shared.SandboxUser })
  users?: SandboxUser[];
}
