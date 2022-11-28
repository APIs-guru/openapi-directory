import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaCloudSchedulerConfig
/** 
 * Cloud Scheduler Trigger configuration
**/
export class GoogleCloudIntegrationsV1alphaCloudSchedulerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cronTab" })
  cronTab?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;
}
