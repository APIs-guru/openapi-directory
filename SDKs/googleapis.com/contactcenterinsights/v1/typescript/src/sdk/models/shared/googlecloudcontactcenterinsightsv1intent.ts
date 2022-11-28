import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1Intent
/** 
 * The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.
**/
export class GoogleCloudContactcenterinsightsV1Intent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
