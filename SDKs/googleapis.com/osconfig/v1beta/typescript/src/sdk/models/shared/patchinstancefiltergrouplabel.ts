import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PatchInstanceFilterGroupLabel
/** 
 * Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
**/
export class PatchInstanceFilterGroupLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
