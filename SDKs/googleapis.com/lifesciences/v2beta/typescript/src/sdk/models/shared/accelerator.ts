import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Accelerator
/** 
 * Carries information about an accelerator that can be attached to a VM.
**/
export class Accelerator extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
