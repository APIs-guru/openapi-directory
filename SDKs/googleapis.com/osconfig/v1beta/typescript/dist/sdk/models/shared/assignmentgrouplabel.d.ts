import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
**/
export declare class AssignmentGroupLabel extends SpeakeasyBase {
    labels?: Map<string, string>;
}
