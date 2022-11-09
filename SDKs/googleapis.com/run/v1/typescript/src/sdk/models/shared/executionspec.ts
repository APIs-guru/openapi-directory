import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskTemplateSpec } from "./tasktemplatespec";


// ExecutionSpec
/** 
 * ExecutionSpec describes how the execution will look.
**/
export class ExecutionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=taskCount" })
  taskCount?: number;

  @Metadata({ data: "json, name=template" })
  template?: TaskTemplateSpec;
}
