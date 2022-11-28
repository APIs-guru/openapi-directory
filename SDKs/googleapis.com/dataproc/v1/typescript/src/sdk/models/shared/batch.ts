import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentConfig } from "./environmentconfig";
import { PySparkBatch } from "./pysparkbatch";
import { RuntimeConfig } from "./runtimeconfig";
import { RuntimeInfo } from "./runtimeinfo";
import { SparkBatch } from "./sparkbatch";
import { SparkRBatch } from "./sparkrbatch";
import { SparkSqlBatch } from "./sparksqlbatch";
import { StateHistory } from "./statehistory";
import { RuntimeInfoInput } from "./runtimeinfo";


export enum BatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// Batch
/** 
 * A representation of a batch workload in the service.
**/
export class Batch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentConfig" })
  environmentConfig?: EnvironmentConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=pysparkBatch" })
  pysparkBatch?: PySparkBatch;

  @SpeakeasyMetadata({ data: "json, name=runtimeConfig" })
  runtimeConfig?: RuntimeConfig;

  @SpeakeasyMetadata({ data: "json, name=runtimeInfo" })
  runtimeInfo?: RuntimeInfo;

  @SpeakeasyMetadata({ data: "json, name=sparkBatch" })
  sparkBatch?: SparkBatch;

  @SpeakeasyMetadata({ data: "json, name=sparkRBatch" })
  sparkRBatch?: SparkRBatch;

  @SpeakeasyMetadata({ data: "json, name=sparkSqlBatch" })
  sparkSqlBatch?: SparkSqlBatch;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BatchStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateHistory", elemType: StateHistory })
  stateHistory?: StateHistory[];

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// BatchInput
/** 
 * A representation of a batch workload in the service.
**/
export class BatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentConfig" })
  environmentConfig?: EnvironmentConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pysparkBatch" })
  pysparkBatch?: PySparkBatch;

  @SpeakeasyMetadata({ data: "json, name=runtimeConfig" })
  runtimeConfig?: RuntimeConfig;

  @SpeakeasyMetadata({ data: "json, name=runtimeInfo" })
  runtimeInfo?: RuntimeInfoInput;

  @SpeakeasyMetadata({ data: "json, name=sparkBatch" })
  sparkBatch?: SparkBatch;

  @SpeakeasyMetadata({ data: "json, name=sparkRBatch" })
  sparkRBatch?: SparkRBatch;

  @SpeakeasyMetadata({ data: "json, name=sparkSqlBatch" })
  sparkSqlBatch?: SparkSqlBatch;
}
