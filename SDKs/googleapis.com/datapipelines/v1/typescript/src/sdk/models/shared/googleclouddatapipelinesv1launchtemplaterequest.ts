import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1LaunchTemplateParameters } from "./googleclouddatapipelinesv1launchtemplateparameters";


// GoogleCloudDatapipelinesV1LaunchTemplateRequest
/** 
 * A request to launch a template.
**/
export class GoogleCloudDatapipelinesV1LaunchTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPath" })
  gcsPath?: string;

  @Metadata({ data: "json, name=launchParameters" })
  launchParameters?: GoogleCloudDatapipelinesV1LaunchTemplateParameters;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
