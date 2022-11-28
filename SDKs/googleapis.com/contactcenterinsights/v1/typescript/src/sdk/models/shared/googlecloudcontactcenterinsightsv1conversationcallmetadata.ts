import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1ConversationCallMetadata
/** 
 * Call-specific metadata.
**/
export class GoogleCloudContactcenterinsightsV1ConversationCallMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentChannel" })
  agentChannel?: number;

  @SpeakeasyMetadata({ data: "json, name=customerChannel" })
  customerChannel?: number;
}
