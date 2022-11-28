import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2LargeCustomDictionaryConfig } from "./googleprivacydlpv2largecustomdictionaryconfig";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
/**
 * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
**/
export declare class GooglePrivacyDlpV2StoredInfoTypeConfig extends SpeakeasyBase {
    description?: string;
    dictionary?: GooglePrivacyDlpV2Dictionary;
    displayName?: string;
    largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;
    regex?: GooglePrivacyDlpV2Regex;
}
