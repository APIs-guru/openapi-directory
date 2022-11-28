import { SpeakeasyBase } from "../../../internal/utils";
import { RateTier } from "./ratetier";
/**
 * A SKU price consisting of tiered rates.
**/
export declare class Rate extends SpeakeasyBase {
    tiers?: RateTier[];
    unit?: string;
    unitCount?: number;
}
