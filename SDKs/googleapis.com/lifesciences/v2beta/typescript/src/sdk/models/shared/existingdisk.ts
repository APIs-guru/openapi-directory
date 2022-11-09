import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExistingDisk
/** 
 * Configuration for an existing disk to be attached to the VM.
**/
export class ExistingDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=disk" })
  disk?: string;
}
