import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchFlexTemplateParameter } from "./launchflextemplateparameter";
/**
 * A request to launch a Cloud Dataflow job from a FlexTemplate.
**/
export declare class LaunchFlexTemplateRequest extends SpeakeasyBase {
    launchParameter?: LaunchFlexTemplateParameter;
    validateOnly?: boolean;
}
