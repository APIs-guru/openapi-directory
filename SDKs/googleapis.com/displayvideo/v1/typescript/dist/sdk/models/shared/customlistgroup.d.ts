import { SpeakeasyBase } from "../../../internal/utils";
import { CustomListTargetingSetting } from "./customlisttargetingsetting";
/**
 * Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
**/
export declare class CustomListGroup extends SpeakeasyBase {
    settings?: CustomListTargetingSetting[];
}
