import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Pricing details for a service tier.
**/
export declare class RateTier extends SpeakeasyBase {
    price?: Money;
    startAmount?: number;
}
