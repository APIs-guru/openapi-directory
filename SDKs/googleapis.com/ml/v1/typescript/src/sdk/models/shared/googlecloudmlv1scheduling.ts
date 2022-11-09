import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1Scheduling
/** 
 * All parameters related to scheduling of training jobs.
**/
export class GoogleCloudMlV1Scheduling extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxRunningTime" })
  maxRunningTime?: string;

  @Metadata({ data: "json, name=maxWaitTime" })
  maxWaitTime?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;
}
