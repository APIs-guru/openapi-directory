import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPolicyanalyzerV1beta1ObservationPeriod
/** 
 * Represents data observation period.
**/
export class GoogleCloudPolicyanalyzerV1beta1ObservationPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
