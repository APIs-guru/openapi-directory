import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Max findings configuration per infoType, per content item or long running DlpJob.
**/
export declare class GooglePrivacyDlpV2InfoTypeLimit extends SpeakeasyBase {
    infoType?: GooglePrivacyDlpV2InfoType;
    maxFindings?: number;
}
