import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreativeGroupAssignmentCreativeGroupNumberEnum {
    CreativeGroupOne = "CREATIVE_GROUP_ONE",
    CreativeGroupTwo = "CREATIVE_GROUP_TWO"
}


// CreativeGroupAssignment
/** 
 * Creative Group Assignment.
**/
export class CreativeGroupAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeGroupId" })
  creativeGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeGroupNumber" })
  creativeGroupNumber?: CreativeGroupAssignmentCreativeGroupNumberEnum;
}
