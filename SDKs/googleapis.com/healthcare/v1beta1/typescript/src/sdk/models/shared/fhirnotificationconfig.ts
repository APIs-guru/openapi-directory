import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FhirNotificationConfig
/** 
 * Contains the configuration for FHIR notifications.
**/
export class FhirNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=sendFullResource" })
  sendFullResource?: boolean;
}
