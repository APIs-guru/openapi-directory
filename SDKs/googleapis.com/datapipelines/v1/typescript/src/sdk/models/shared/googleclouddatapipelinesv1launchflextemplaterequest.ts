import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter } from "./googleclouddatapipelinesv1launchflextemplateparameter";


// GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest
/** 
 * A request to launch a Dataflow job from a Flex Template.
**/
export class GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchParameter" })
  launchParameter?: GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
