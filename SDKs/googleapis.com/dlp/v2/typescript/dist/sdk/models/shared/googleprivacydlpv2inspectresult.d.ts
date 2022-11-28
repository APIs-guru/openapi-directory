import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Finding } from "./googleprivacydlpv2finding";
/**
 * All the findings for a single scanned item.
**/
export declare class GooglePrivacyDlpV2InspectResult extends SpeakeasyBase {
    findings?: GooglePrivacyDlpV2Finding[];
    findingsTruncated?: boolean;
}
