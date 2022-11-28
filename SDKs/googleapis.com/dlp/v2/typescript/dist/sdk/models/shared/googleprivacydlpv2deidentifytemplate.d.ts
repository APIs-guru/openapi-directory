import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
/**
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export declare class GooglePrivacyDlpV2DeidentifyTemplate extends SpeakeasyBase {
    createTime?: string;
    deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    description?: string;
    displayName?: string;
    name?: string;
    updateTime?: string;
}
/**
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
export declare class GooglePrivacyDlpV2DeidentifyTemplateInput extends SpeakeasyBase {
    deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    description?: string;
    displayName?: string;
}
