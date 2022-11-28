import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Summary statistics about the replayed log entries.
**/
export declare class GoogleCloudPolicysimulatorV1ReplayResultsSummary extends SpeakeasyBase {
    differenceCount?: number;
    errorCount?: number;
    logCount?: number;
    newestDate?: GoogleTypeDate;
    oldestDate?: GoogleTypeDate;
    unchangedCount?: number;
}
