import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ExecutionSpec } from "./executionspec";
/**
 * ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
**/
export declare class ExecutionTemplateSpec extends SpeakeasyBase {
    metadata?: ObjectMeta;
    spec?: ExecutionSpec;
}
