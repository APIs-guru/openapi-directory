import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LargeCustomDictionaryStats } from "./googleprivacydlpv2largecustomdictionarystats";



// GooglePrivacyDlpV2StoredInfoTypeStats
/** 
 * Statistics for a StoredInfoType.
**/
export class GooglePrivacyDlpV2StoredInfoTypeStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=largeCustomDictionary" })
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryStats;
}
