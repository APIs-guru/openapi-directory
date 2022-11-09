import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignmentGroupLabel } from "./assignmentgrouplabel";
import { AssignmentOsType } from "./assignmentostype";


// Assignment
/** 
 * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
**/
export class Assignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupLabels", elemType: shared.AssignmentGroupLabel })
  groupLabels?: AssignmentGroupLabel[];

  @Metadata({ data: "json, name=instanceNamePrefixes" })
  instanceNamePrefixes?: string[];

  @Metadata({ data: "json, name=instances" })
  instances?: string[];

  @Metadata({ data: "json, name=osTypes", elemType: shared.AssignmentOsType })
  osTypes?: AssignmentOsType[];

  @Metadata({ data: "json, name=zones" })
  zones?: string[];
}
