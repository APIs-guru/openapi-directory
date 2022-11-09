import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IamBindingActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED"
,    Add = "ADD"
,    Remove = "REMOVE"
}


// IamBinding
/** 
 * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
**/
export class IamBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: IamBindingActionEnum;

  @Metadata({ data: "json, name=member" })
  member?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}
