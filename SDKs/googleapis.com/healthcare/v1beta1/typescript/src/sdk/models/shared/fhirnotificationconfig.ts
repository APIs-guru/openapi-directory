import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FhirNotificationConfig
/** 
 * Contains the configuration for FHIR notifications.
**/
export class FhirNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=sendFullResource" })
  sendFullResource?: boolean;
}
