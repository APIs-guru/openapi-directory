import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPolicyanalyzerV1ObservationPeriod
/** 
 * Represents data observation period.
**/
export class GoogleCloudPolicyanalyzerV1ObservationPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
