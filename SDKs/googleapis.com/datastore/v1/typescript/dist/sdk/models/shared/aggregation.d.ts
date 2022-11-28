import { SpeakeasyBase } from "../../../internal/utils";
import { Count } from "./count";
/**
 * Defines a aggregation that produces a single result.
**/
export declare class Aggregation extends SpeakeasyBase {
    alias?: string;
    count?: Count;
}
