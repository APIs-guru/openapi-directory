import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1Job } from "./googleclouddatapipelinesv1job";


// GoogleCloudDatapipelinesV1RunPipelineResponse
/** 
 * Response message for RunPipeline
**/
export class GoogleCloudDatapipelinesV1RunPipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: GoogleCloudDatapipelinesV1Job;
}
