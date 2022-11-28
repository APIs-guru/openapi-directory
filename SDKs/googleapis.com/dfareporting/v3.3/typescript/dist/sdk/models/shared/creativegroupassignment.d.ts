import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreativeGroupAssignmentCreativeGroupNumberEnum {
    CreativeGroupOne = "CREATIVE_GROUP_ONE",
    CreativeGroupTwo = "CREATIVE_GROUP_TWO"
}
/**
 * Creative Group Assignment.
**/
export declare class CreativeGroupAssignment extends SpeakeasyBase {
    creativeGroupId?: string;
    creativeGroupNumber?: CreativeGroupAssignmentCreativeGroupNumberEnum;
}
