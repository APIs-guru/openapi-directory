import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxRequest
/** 
 * Request to create a new sandbox
**/
export class SandboxRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sandboxId" })
  sandboxId: string;
}
