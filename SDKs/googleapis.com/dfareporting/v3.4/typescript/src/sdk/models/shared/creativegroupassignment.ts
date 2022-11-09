import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreativeGroupAssignmentCreativeGroupNumberEnum {
    CreativeGroupOne = "CREATIVE_GROUP_ONE"
,    CreativeGroupTwo = "CREATIVE_GROUP_TWO"
}


// CreativeGroupAssignment
/** 
 * Creative Group Assignment.
**/
export class CreativeGroupAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeGroupId" })
  creativeGroupId?: string;

  @Metadata({ data: "json, name=creativeGroupNumber" })
  creativeGroupNumber?: CreativeGroupAssignmentCreativeGroupNumberEnum;
}
