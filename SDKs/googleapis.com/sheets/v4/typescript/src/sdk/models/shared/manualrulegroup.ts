import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExtendedValue } from "./extendedvalue";
import { ExtendedValue } from "./extendedvalue";


// ManualRuleGroup
/** 
 * A group name and a list of items from the source data that should be placed in the group with this name.
**/
export class ManualRuleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupName" })
  groupName?: ExtendedValue;

  @Metadata({ data: "json, name=items", elemType: shared.ExtendedValue })
  items?: ExtendedValue[];
}
