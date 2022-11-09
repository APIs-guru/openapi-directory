import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionTemplateSpec } from "./executiontemplatespec";


// JobSpec
/** 
 * JobSpec describes how the job will look.
**/
export class JobSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template?: ExecutionTemplateSpec;
}
