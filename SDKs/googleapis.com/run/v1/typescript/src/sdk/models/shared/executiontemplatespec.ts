import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { ExecutionSpec } from "./executionspec";


// ExecutionTemplateSpec
/** 
 * ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
**/
export class ExecutionTemplateSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: ExecutionSpec;
}
