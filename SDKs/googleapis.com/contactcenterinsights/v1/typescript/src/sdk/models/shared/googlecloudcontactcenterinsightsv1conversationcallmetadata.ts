import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1ConversationCallMetadata
/** 
 * Call-specific metadata.
**/
export class GoogleCloudContactcenterinsightsV1ConversationCallMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentChannel" })
  agentChannel?: number;

  @Metadata({ data: "json, name=customerChannel" })
  customerChannel?: number;
}
