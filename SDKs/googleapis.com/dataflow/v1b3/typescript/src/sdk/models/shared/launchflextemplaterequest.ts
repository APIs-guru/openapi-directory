import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchFlexTemplateParameter } from "./launchflextemplateparameter";



// LaunchFlexTemplateRequest
/** 
 * A request to launch a Cloud Dataflow job from a FlexTemplate.
**/
export class LaunchFlexTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchParameter" })
  launchParameter?: LaunchFlexTemplateParameter;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
