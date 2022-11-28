import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatchInstanceFilterGroupLabel
/** 
 * Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
**/
export class PatchInstanceFilterGroupLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
