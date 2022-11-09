import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1PhraseMatcher } from "./googlecloudcontactcenterinsightsv1phrasematcher";


// GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
/** 
 * The response of listing phrase matchers.
**/
export class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=phraseMatchers", elemType: shared.GoogleCloudContactcenterinsightsV1PhraseMatcher })
  phraseMatchers?: GoogleCloudContactcenterinsightsV1PhraseMatcher[];
}
