import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicyanalyzerV1ObservationPeriod } from "./googlecloudpolicyanalyzerv1observationperiod";



export class GoogleCloudPolicyanalyzerV1Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=observationPeriod" })
  observationPeriod?: GoogleCloudPolicyanalyzerV1ObservationPeriod;
}
