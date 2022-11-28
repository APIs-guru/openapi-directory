import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
import { EnvironmentDimensionValueEntry } from "./environmentdimensionvalueentry";
import { MergedResult } from "./mergedresult";
import { ResultsStorage } from "./resultsstorage";
import { ShardSummary } from "./shardsummary";
/**
 * An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
**/
export declare class Environment extends SpeakeasyBase {
    completionTime?: Timestamp;
    creationTime?: Timestamp;
    dimensionValue?: EnvironmentDimensionValueEntry[];
    displayName?: string;
    environmentId?: string;
    environmentResult?: MergedResult;
    executionId?: string;
    historyId?: string;
    projectId?: string;
    resultsStorage?: ResultsStorage;
    shardSummaries?: ShardSummary[];
}
