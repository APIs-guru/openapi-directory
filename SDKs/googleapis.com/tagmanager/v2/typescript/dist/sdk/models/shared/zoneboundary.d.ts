import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
/**
 * Represents a Zone's boundaries.
**/
export declare class ZoneBoundary extends SpeakeasyBase {
    condition?: Condition[];
    customEvaluationTriggerId?: string[];
}
