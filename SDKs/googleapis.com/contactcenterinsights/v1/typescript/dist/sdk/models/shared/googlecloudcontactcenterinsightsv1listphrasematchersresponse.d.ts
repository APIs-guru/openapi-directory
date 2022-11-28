import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatcher } from "./googlecloudcontactcenterinsightsv1phrasematcher";
/**
 * The response of listing phrase matchers.
**/
export declare class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    phraseMatchers?: GoogleCloudContactcenterinsightsV1PhraseMatcher[];
}
