import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1Intent
/** 
 * The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.
**/
export class GoogleCloudContactcenterinsightsV1Intent extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
