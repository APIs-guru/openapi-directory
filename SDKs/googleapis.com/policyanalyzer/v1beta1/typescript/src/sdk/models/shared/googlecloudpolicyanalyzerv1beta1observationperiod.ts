import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPolicyanalyzerV1beta1ObservationPeriod
/** 
 * Represents data observation period.
**/
export class GoogleCloudPolicyanalyzerV1beta1ObservationPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
