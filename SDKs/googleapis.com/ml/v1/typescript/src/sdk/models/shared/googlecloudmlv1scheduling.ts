import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1Scheduling
/** 
 * All parameters related to scheduling of training jobs.
**/
export class GoogleCloudMlV1Scheduling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxRunningTime" })
  maxRunningTime?: string;

  @SpeakeasyMetadata({ data: "json, name=maxWaitTime" })
  maxWaitTime?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;
}
