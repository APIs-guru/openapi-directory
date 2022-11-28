import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";



// CreateJobFromTemplateRequest
/** 
 * A request to create a Cloud Dataflow job from a template.
**/
export class CreateJobFromTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: RuntimeEnvironment;

  @SpeakeasyMetadata({ data: "json, name=gcsPath" })
  gcsPath?: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;
}
