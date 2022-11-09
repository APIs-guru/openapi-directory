import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";


// GoogleCloudDataplexV1TaskExecutionStatus
/** 
 * Status of the task execution (e.g. Jobs).
**/
export class GoogleCloudDataplexV1TaskExecutionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=latestJob" })
  latestJob?: GoogleCloudDataplexV1Job;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
