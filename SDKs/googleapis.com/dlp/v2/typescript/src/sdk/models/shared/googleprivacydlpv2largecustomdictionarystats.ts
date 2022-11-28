import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2LargeCustomDictionaryStats
/** 
 * Summary statistics of a custom dictionary.
**/
export class GooglePrivacyDlpV2LargeCustomDictionaryStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approxNumPhrases" })
  approxNumPhrases?: string;
}
