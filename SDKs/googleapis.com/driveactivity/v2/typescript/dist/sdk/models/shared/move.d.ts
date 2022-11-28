import { SpeakeasyBase } from "../../../internal/utils";
import { TargetReference } from "./targetreference";
/**
 * An object was moved.
**/
export declare class Move extends SpeakeasyBase {
    addedParents?: TargetReference[];
    removedParents?: TargetReference[];
}
