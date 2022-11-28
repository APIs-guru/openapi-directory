import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";
/**
 * Configuration to suppress records whose suppression conditions evaluate to true.
**/
export declare class GooglePrivacyDlpV2RecordSuppression extends SpeakeasyBase {
    condition?: GooglePrivacyDlpV2RecordCondition;
}
