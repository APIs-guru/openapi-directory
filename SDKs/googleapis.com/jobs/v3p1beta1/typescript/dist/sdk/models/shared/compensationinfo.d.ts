import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationRange } from "./compensationrange";
import { CompensationEntry } from "./compensationentry";
/**
 * Job compensation details.
**/
export declare class CompensationInfo extends SpeakeasyBase {
    annualizedBaseCompensationRange?: CompensationRange;
    annualizedTotalCompensationRange?: CompensationRange;
    entries?: CompensationEntry[];
}
