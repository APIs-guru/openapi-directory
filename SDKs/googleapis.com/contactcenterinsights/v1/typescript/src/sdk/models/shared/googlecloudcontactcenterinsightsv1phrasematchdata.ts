import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1PhraseMatchData
/** 
 * The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=phraseMatcher" })
  phraseMatcher?: string;
}
