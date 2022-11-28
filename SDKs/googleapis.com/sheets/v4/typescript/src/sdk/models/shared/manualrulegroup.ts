import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";



// ManualRuleGroup
/** 
 * A group name and a list of items from the source data that should be placed in the group with this name.
**/
export class ManualRuleGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: ExtendedValue;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ExtendedValue })
  items?: ExtendedValue[];
}
