import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest } from "./googleclouddatapipelinesv1launchflextemplaterequest";
import { GoogleCloudDatapipelinesV1LaunchTemplateRequest } from "./googleclouddatapipelinesv1launchtemplaterequest";


// GoogleCloudDatapipelinesV1Workload
/** 
 * Workload details for creating the pipeline jobs.
**/
export class GoogleCloudDatapipelinesV1Workload extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataflowFlexTemplateRequest" })
  dataflowFlexTemplateRequest?: GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;

  @Metadata({ data: "json, name=dataflowLaunchTemplateRequest" })
  dataflowLaunchTemplateRequest?: GoogleCloudDatapipelinesV1LaunchTemplateRequest;
}
