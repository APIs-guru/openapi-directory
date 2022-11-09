import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1SuggestTrialsRequest
/** 
 * The request message for the SuggestTrial service method.
**/
export class GoogleCloudMlV1SuggestTrialsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=suggestionCount" })
  suggestionCount?: number;
}
