import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IamBindingActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE"
}


// IamBinding
/** 
 * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
**/
export class IamBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: IamBindingActionEnum;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
