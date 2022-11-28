import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";
/**
 * Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
**/
export declare class GooglePrivacyDlpV2HybridOptions extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    requiredFindingLabelKeys?: string[];
    tableOptions?: GooglePrivacyDlpV2TableOptions;
}
