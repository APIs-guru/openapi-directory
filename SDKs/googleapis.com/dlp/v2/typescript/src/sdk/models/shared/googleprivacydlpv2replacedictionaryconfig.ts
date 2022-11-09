import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2WordList } from "./googleprivacydlpv2wordlist";


// GooglePrivacyDlpV2ReplaceDictionaryConfig
/** 
 * Replace each input value with a value randomly selected from the dictionary.
**/
export class GooglePrivacyDlpV2ReplaceDictionaryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=wordList" })
  wordList?: GooglePrivacyDlpV2WordList;
}
