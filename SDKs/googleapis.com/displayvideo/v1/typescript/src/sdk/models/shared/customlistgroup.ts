import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomListTargetingSetting } from "./customlisttargetingsetting";



// CustomListGroup
/** 
 * Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
**/
export class CustomListGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings", elemType: CustomListTargetingSetting })
  settings?: CustomListTargetingSetting[];
}
