import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export declare class GooglePrivacyDlpV2InspectTemplateInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
}
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export declare class GooglePrivacyDlpV2InspectTemplate extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    name?: string;
    updateTime?: string;
}
