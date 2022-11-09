import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchFlexTemplateParameter } from "./launchflextemplateparameter";


// LaunchFlexTemplateRequest
/** 
 * A request to launch a Cloud Dataflow job from a FlexTemplate.
**/
export class LaunchFlexTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchParameter" })
  launchParameter?: LaunchFlexTemplateParameter;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
