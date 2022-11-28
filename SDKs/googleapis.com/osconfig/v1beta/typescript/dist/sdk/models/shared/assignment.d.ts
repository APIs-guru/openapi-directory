import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentGroupLabel } from "./assignmentgrouplabel";
import { AssignmentOsType } from "./assignmentostype";
/**
 * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
**/
export declare class Assignment extends SpeakeasyBase {
    groupLabels?: AssignmentGroupLabel[];
    instanceNamePrefixes?: string[];
    instances?: string[];
    osTypes?: AssignmentOsType[];
    zones?: string[];
}
