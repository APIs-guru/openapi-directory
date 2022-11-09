import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentConfig } from "./environmentconfig";
import { PySparkBatch } from "./pysparkbatch";
import { RuntimeConfig } from "./runtimeconfig";
import { RuntimeInfo } from "./runtimeinfo";
import { SparkBatch } from "./sparkbatch";
import { SparkRBatch } from "./sparkrbatch";
import { SparkSqlBatch } from "./sparksqlbatch";
import { StateHistory } from "./statehistory";

export enum BatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// Batch
/** 
 * A representation of a batch workload in the service.
**/
export class Batch extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=environmentConfig" })
  environmentConfig?: EnvironmentConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=pysparkBatch" })
  pysparkBatch?: PySparkBatch;

  @Metadata({ data: "json, name=runtimeConfig" })
  runtimeConfig?: RuntimeConfig;

  @Metadata({ data: "json, name=runtimeInfo" })
  runtimeInfo?: RuntimeInfo;

  @Metadata({ data: "json, name=sparkBatch" })
  sparkBatch?: SparkBatch;

  @Metadata({ data: "json, name=sparkRBatch" })
  sparkRBatch?: SparkRBatch;

  @Metadata({ data: "json, name=sparkSqlBatch" })
  sparkSqlBatch?: SparkSqlBatch;

  @Metadata({ data: "json, name=state" })
  state?: BatchStateEnum;

  @Metadata({ data: "json, name=stateHistory", elemType: shared.StateHistory })
  stateHistory?: StateHistory[];

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
