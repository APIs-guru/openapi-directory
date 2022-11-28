import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The price rate indicating starting usage and its corresponding price.
**/
export declare class TierRate extends SpeakeasyBase {
    startUsageAmount?: number;
    unitPrice?: Money;
}
