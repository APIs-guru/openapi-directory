import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxRequest
/** 
 * Request to create a new sandbox
**/
export class SandboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sandboxId" })
  sandboxId: string;
}
