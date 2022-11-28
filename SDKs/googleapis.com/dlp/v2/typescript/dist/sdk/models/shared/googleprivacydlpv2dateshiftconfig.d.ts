import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
/**
 * Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
**/
export declare class GooglePrivacyDlpV2DateShiftConfig extends SpeakeasyBase {
    context?: GooglePrivacyDlpV2FieldId;
    cryptoKey?: GooglePrivacyDlpV2CryptoKey;
    lowerBoundDays?: number;
    upperBoundDays?: number;
}
