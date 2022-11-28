import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";
/**
 * Snapshot of the inspection configuration.
**/
export declare class GooglePrivacyDlpV2RequestedOptions extends SpeakeasyBase {
    jobConfig?: GooglePrivacyDlpV2InspectJobConfig;
    snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
}
