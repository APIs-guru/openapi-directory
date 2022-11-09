import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomListTargetingSetting } from "./customlisttargetingsetting";


// CustomListGroup
/** 
 * Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
**/
export class CustomListGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings", elemType: shared.CustomListTargetingSetting })
  settings?: CustomListTargetingSetting[];
}
