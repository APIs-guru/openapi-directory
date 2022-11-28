import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentConfig } from "./environmentconfig";
import { PySparkBatch } from "./pysparkbatch";
import { RuntimeConfig } from "./runtimeconfig";
import { RuntimeInfo } from "./runtimeinfo";
import { SparkBatch } from "./sparkbatch";
import { SparkRBatch } from "./sparkrbatch";
import { SparkSqlBatch } from "./sparksqlbatch";
import { StateHistory } from "./statehistory";
import { RuntimeInfoInput } from "./runtimeinfo";
export declare enum BatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * A representation of a batch workload in the service.
**/
export declare class Batch extends SpeakeasyBase {
    createTime?: string;
    creator?: string;
    environmentConfig?: EnvironmentConfig;
    labels?: Map<string, string>;
    name?: string;
    operation?: string;
    pysparkBatch?: PySparkBatch;
    runtimeConfig?: RuntimeConfig;
    runtimeInfo?: RuntimeInfo;
    sparkBatch?: SparkBatch;
    sparkRBatch?: SparkRBatch;
    sparkSqlBatch?: SparkSqlBatch;
    state?: BatchStateEnum;
    stateHistory?: StateHistory[];
    stateMessage?: string;
    stateTime?: string;
    uuid?: string;
}
/**
 * A representation of a batch workload in the service.
**/
export declare class BatchInput extends SpeakeasyBase {
    environmentConfig?: EnvironmentConfig;
    labels?: Map<string, string>;
    pysparkBatch?: PySparkBatch;
    runtimeConfig?: RuntimeConfig;
    runtimeInfo?: RuntimeInfoInput;
    sparkBatch?: SparkBatch;
    sparkRBatch?: SparkRBatch;
    sparkSqlBatch?: SparkSqlBatch;
}
