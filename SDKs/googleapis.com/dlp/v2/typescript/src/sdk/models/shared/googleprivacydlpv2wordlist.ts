import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2WordList
/** 
 * Message defining a list of words or phrases to search for in the data.
**/
export class GooglePrivacyDlpV2WordList extends SpeakeasyBase {
  @Metadata({ data: "json, name=words" })
  words?: string[];
}
