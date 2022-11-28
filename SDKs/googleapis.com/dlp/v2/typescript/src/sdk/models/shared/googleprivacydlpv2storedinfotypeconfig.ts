import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2LargeCustomDictionaryConfig } from "./googleprivacydlpv2largecustomdictionaryconfig";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";



// GooglePrivacyDlpV2StoredInfoTypeConfig
/** 
 * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
**/
export class GooglePrivacyDlpV2StoredInfoTypeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dictionary" })
  dictionary?: GooglePrivacyDlpV2Dictionary;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=largeCustomDictionary" })
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: GooglePrivacyDlpV2Regex;
}
