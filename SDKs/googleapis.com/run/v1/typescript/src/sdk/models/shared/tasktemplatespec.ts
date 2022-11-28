import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskSpec } from "./taskspec";



// TaskTemplateSpec
/** 
 * TaskTemplateSpec describes the data a task should have when created from a template.
**/
export class TaskTemplateSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: TaskSpec;
}
