import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";
/**
 * A group name and a list of items from the source data that should be placed in the group with this name.
**/
export declare class ManualRuleGroup extends SpeakeasyBase {
    groupName?: ExtendedValue;
    items?: ExtendedValue[];
}
