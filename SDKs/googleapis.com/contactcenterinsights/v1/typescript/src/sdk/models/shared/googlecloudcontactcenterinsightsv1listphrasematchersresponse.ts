import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatcher } from "./googlecloudcontactcenterinsightsv1phrasematcher";



// GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
/** 
 * The response of listing phrase matchers.
**/
export class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=phraseMatchers", elemType: GoogleCloudContactcenterinsightsV1PhraseMatcher })
  phraseMatchers?: GoogleCloudContactcenterinsightsV1PhraseMatcher[];
}
