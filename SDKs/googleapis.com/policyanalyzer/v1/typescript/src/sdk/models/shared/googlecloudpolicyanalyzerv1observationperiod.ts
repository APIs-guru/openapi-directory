import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPolicyanalyzerV1ObservationPeriod
/** 
 * Represents data observation period.
**/
export class GoogleCloudPolicyanalyzerV1ObservationPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
