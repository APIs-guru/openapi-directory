import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ExecutionSpec } from "./executionspec";



// ExecutionTemplateSpec
/** 
 * ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
**/
export class ExecutionTemplateSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: ExecutionSpec;
}
