import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicyanalyzerV1ObservationPeriod } from "./googlecloudpolicyanalyzerv1observationperiod";


export class GoogleCloudPolicyanalyzerV1Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity?: Map<string, any>;

  @Metadata({ data: "json, name=activityType" })
  activityType?: string;

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=observationPeriod" })
  observationPeriod?: GoogleCloudPolicyanalyzerV1ObservationPeriod;
}
