import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExistingDisk
/** 
 * Configuration for an existing disk to be attached to the VM.
**/
export class ExistingDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: string;
}
