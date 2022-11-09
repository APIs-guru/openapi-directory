import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssignmentGroupLabel
/** 
 * Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
**/
export class AssignmentGroupLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
