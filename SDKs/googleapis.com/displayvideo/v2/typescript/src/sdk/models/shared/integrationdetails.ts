import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntegrationDetails
/** 
 * Integration details of an entry.
**/
export class IntegrationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationCode" })
  integrationCode?: string;
}
