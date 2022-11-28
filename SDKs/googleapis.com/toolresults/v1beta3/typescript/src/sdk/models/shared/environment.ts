import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
import { EnvironmentDimensionValueEntry } from "./environmentdimensionvalueentry";
import { MergedResult } from "./mergedresult";
import { ResultsStorage } from "./resultsstorage";
import { ShardSummary } from "./shardsummary";



// Environment
/** 
 * An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=dimensionValue", elemType: EnvironmentDimensionValueEntry })
  dimensionValue?: EnvironmentDimensionValueEntry[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentResult" })
  environmentResult?: MergedResult;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=resultsStorage" })
  resultsStorage?: ResultsStorage;

  @SpeakeasyMetadata({ data: "json, name=shardSummaries", elemType: ShardSummary })
  shardSummaries?: ShardSummary[];
}
