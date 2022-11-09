import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaAttemptStats
/** 
 * Status for the execution attempt.
**/
export class GoogleCloudIntegrationsV1alphaAttemptStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
