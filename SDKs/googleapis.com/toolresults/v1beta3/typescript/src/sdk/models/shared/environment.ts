import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Timestamp } from "./timestamp";
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
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: Timestamp;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @Metadata({ data: "json, name=dimensionValue", elemType: shared.EnvironmentDimensionValueEntry })
  dimensionValue?: EnvironmentDimensionValueEntry[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=environmentResult" })
  environmentResult?: MergedResult;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=resultsStorage" })
  resultsStorage?: ResultsStorage;

  @Metadata({ data: "json, name=shardSummaries", elemType: shared.ShardSummary })
  shardSummaries?: ShardSummary[];
}
