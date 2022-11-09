import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskSpec } from "./taskspec";


// TaskTemplateSpec
/** 
 * TaskTemplateSpec describes the data a task should have when created from a template.
**/
export class TaskTemplateSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=spec" })
  spec?: TaskSpec;
}
