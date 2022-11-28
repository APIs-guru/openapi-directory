import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A third party stats resource.
**/
export declare class StatsResponse extends SpeakeasyBase {
    avgSessionLengthMinutes?: number;
    churnProbability?: number;
    daysSinceLastPlayed?: number;
    highSpenderProbability?: number;
    kind?: string;
    numPurchases?: number;
    numSessions?: number;
    numSessionsPercentile?: number;
    spendPercentile?: number;
    spendProbability?: number;
    totalSpendNext28Days?: number;
}
