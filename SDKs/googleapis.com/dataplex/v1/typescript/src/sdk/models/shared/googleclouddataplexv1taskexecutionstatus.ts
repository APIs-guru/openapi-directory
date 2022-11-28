import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";



// GoogleCloudDataplexV1TaskExecutionStatus
/** 
 * Status of the task execution (e.g. Jobs).
**/
export class GoogleCloudDataplexV1TaskExecutionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latestJob" })
  latestJob?: GoogleCloudDataplexV1Job;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
