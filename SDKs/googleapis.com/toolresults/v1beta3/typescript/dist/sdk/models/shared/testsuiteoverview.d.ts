import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { FileReference } from "./filereference";
/**
 * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
**/
export declare class TestSuiteOverview extends SpeakeasyBase {
    elapsedTime?: Duration;
    errorCount?: number;
    failureCount?: number;
    flakyCount?: number;
    name?: string;
    skippedCount?: number;
    totalCount?: number;
    xmlSource?: FileReference;
}
