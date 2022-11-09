import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1LaunchTemplateParameters } from "./googleclouddatapipelinesv1launchtemplateparameters";
/**
 * A request to launch a template.
**/
export declare class GoogleCloudDatapipelinesV1LaunchTemplateRequest extends SpeakeasyBase {
    gcsPath?: string;
    launchParameters?: GoogleCloudDatapipelinesV1LaunchTemplateParameters;
    location?: string;
    projectId?: string;
    validateOnly?: boolean;
}
