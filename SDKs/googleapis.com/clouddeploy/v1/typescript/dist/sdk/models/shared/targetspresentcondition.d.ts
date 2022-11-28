import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
**/
export declare class TargetsPresentCondition extends SpeakeasyBase {
    missingTargets?: string[];
    status?: boolean;
    updateTime?: string;
}
