import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";


// GooglePrivacyDlpV2DateShiftConfig
/** 
 * Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
**/
export class GooglePrivacyDlpV2DateShiftConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=cryptoKey" })
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;

  @Metadata({ data: "json, name=lowerBoundDays" })
  lowerBoundDays?: number;

  @Metadata({ data: "json, name=upperBoundDays" })
  upperBoundDays?: number;
}
