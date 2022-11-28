import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2WordList } from "./googleprivacydlpv2wordlist";
/**
 * Replace each input value with a value randomly selected from the dictionary.
**/
export declare class GooglePrivacyDlpV2ReplaceDictionaryConfig extends SpeakeasyBase {
    wordList?: GooglePrivacyDlpV2WordList;
}
