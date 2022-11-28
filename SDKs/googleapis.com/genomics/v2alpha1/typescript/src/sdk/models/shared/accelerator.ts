import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Accelerator
/** 
 * Carries information about an accelerator that can be attached to a VM.
**/
export class Accelerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
