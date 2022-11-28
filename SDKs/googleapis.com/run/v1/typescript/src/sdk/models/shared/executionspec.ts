import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskTemplateSpec } from "./tasktemplatespec";



// ExecutionSpec
/** 
 * ExecutionSpec describes how the execution will look.
**/
export class ExecutionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=taskCount" })
  taskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: TaskTemplateSpec;
}
