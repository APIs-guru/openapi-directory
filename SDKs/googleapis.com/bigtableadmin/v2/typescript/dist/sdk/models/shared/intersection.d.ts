import { SpeakeasyBase } from "../../../internal/utils";
import { GcRule } from "./gcrule";
/**
 * A GcRule which deletes cells matching all of the given rules.
**/
export declare class Intersection extends SpeakeasyBase {
    rules?: GcRule[];
}
