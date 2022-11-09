import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2LargeCustomDictionaryStats } from "./googleprivacydlpv2largecustomdictionarystats";


// GooglePrivacyDlpV2StoredInfoTypeStats
/** 
 * Statistics for a StoredInfoType.
**/
export class GooglePrivacyDlpV2StoredInfoTypeStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=largeCustomDictionary" })
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryStats;
}
