import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1SuggestTrialsRequest
/** 
 * The request message for the SuggestTrial service method.
**/
export class GoogleCloudMlV1SuggestTrialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestionCount" })
  suggestionCount?: number;
}
