import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignmentGroupLabel } from "./assignmentgrouplabel";
import { AssignmentOsType } from "./assignmentostype";



// Assignment
/** 
 * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
**/
export class Assignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupLabels", elemType: AssignmentGroupLabel })
  groupLabels?: AssignmentGroupLabel[];

  @SpeakeasyMetadata({ data: "json, name=instanceNamePrefixes" })
  instanceNamePrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=instances" })
  instances?: string[];

  @SpeakeasyMetadata({ data: "json, name=osTypes", elemType: AssignmentOsType })
  osTypes?: AssignmentOsType[];

  @SpeakeasyMetadata({ data: "json, name=zones" })
  zones?: string[];
}
