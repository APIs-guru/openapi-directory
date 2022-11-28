import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Schedule } from "./googleprivacydlpv2schedule";
/**
 * What event needs to occur for a new job to be started.
**/
export declare class GooglePrivacyDlpV2Trigger extends SpeakeasyBase {
    manual?: Map<string, any>;
    schedule?: GooglePrivacyDlpV2Schedule;
}
