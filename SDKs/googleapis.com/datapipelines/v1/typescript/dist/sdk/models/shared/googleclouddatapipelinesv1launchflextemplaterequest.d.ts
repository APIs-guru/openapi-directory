import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter } from "./googleclouddatapipelinesv1launchflextemplateparameter";
/**
 * A request to launch a Dataflow job from a Flex Template.
**/
export declare class GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest extends SpeakeasyBase {
    launchParameter?: GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
    location?: string;
    projectId?: string;
    validateOnly?: boolean;
}
