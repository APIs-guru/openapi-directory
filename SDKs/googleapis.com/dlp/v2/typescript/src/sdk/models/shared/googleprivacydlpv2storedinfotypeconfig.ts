import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2LargeCustomDictionaryConfig } from "./googleprivacydlpv2largecustomdictionaryconfig";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";


// GooglePrivacyDlpV2StoredInfoTypeConfig
/** 
 * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
**/
export class GooglePrivacyDlpV2StoredInfoTypeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dictionary" })
  dictionary?: GooglePrivacyDlpV2Dictionary;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=largeCustomDictionary" })
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;

  @Metadata({ data: "json, name=regex" })
  regex?: GooglePrivacyDlpV2Regex;
}
