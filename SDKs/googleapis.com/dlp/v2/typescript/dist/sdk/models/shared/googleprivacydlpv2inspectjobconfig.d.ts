import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2StorageConfig } from "./googleprivacydlpv2storageconfig";
/**
 * Controls what and how to inspect for findings.
**/
export declare class GooglePrivacyDlpV2InspectJobConfig extends SpeakeasyBase {
    actions?: GooglePrivacyDlpV2Action[];
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    inspectTemplateName?: string;
    storageConfig?: GooglePrivacyDlpV2StorageConfig;
}
