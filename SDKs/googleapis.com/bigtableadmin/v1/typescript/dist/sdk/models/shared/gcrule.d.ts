import { SpeakeasyBase } from "../../../internal/utils";
import { Intersection } from "./intersection";
import { Union } from "./union";
/**
 * Rule for determining which cells to delete during garbage collection.
**/
export declare class GcRule extends SpeakeasyBase {
    intersection?: Intersection;
    maxAge?: string;
    maxNumVersions?: number;
    union?: Union;
}
