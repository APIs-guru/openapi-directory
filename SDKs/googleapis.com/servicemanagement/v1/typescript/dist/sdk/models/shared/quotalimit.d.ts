import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
**/
export declare class QuotaLimit extends SpeakeasyBase {
    defaultLimit?: string;
    description?: string;
    displayName?: string;
    duration?: string;
    freeTier?: string;
    maxLimit?: string;
    metric?: string;
    name?: string;
    unit?: string;
    values?: Map<string, string>;
}
