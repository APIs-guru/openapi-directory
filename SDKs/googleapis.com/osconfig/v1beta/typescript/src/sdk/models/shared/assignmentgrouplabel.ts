import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignmentGroupLabel
/** 
 * Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
**/
export class AssignmentGroupLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
