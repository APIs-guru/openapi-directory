import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";


// CreateJobFromTemplateRequest
/** 
 * A request to create a Cloud Dataflow job from a template.
**/
export class CreateJobFromTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: RuntimeEnvironment;

  @Metadata({ data: "json, name=gcsPath" })
  gcsPath?: string;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;
}
