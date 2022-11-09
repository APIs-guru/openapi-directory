import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest } from "./googleclouddatapipelinesv1launchflextemplaterequest";
import { GoogleCloudDatapipelinesV1LaunchTemplateRequest } from "./googleclouddatapipelinesv1launchtemplaterequest";
/**
 * Workload details for creating the pipeline jobs.
**/
export declare class GoogleCloudDatapipelinesV1Workload extends SpeakeasyBase {
    dataflowFlexTemplateRequest?: GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
    dataflowLaunchTemplateRequest?: GoogleCloudDatapipelinesV1LaunchTemplateRequest;
}
