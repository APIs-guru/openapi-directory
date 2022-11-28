import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTemplateSpec } from "./executiontemplatespec";



// JobSpec
/** 
 * JobSpec describes how the job will look.
**/
export class JobSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: ExecutionTemplateSpec;
}
