import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
/**
 * Bucket is represented as a range, along with replacement values.
**/
export declare class GooglePrivacyDlpV2Bucket extends SpeakeasyBase {
    max?: GooglePrivacyDlpV2Value;
    min?: GooglePrivacyDlpV2Value;
    replacementValue?: GooglePrivacyDlpV2Value;
}
