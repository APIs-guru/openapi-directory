import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";
/**
 * Populate to associate additional data with each finding.
**/
export declare class GooglePrivacyDlpV2HybridFindingDetails extends SpeakeasyBase {
    containerDetails?: GooglePrivacyDlpV2Container;
    fileOffset?: string;
    labels?: Map<string, string>;
    rowOffset?: string;
    tableOptions?: GooglePrivacyDlpV2TableOptions;
}
