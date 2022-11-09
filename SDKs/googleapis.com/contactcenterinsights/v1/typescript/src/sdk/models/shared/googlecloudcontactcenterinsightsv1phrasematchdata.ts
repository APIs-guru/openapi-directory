import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1PhraseMatchData
/** 
 * The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
**/
export class GoogleCloudContactcenterinsightsV1PhraseMatchData extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=phraseMatcher" })
  phraseMatcher?: string;
}
