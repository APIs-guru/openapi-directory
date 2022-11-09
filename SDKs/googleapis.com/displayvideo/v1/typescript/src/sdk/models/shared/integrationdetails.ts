import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntegrationDetails
/** 
 * Integration details of an entry.
**/
export class IntegrationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=integrationCode" })
  integrationCode?: string;
}
