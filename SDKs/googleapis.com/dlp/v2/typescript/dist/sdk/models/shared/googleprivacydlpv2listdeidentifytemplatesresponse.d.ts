import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplate } from "./googleprivacydlpv2deidentifytemplate";
/**
 * Response message for ListDeidentifyTemplates.
**/
export declare class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse extends SpeakeasyBase {
    deidentifyTemplates?: GooglePrivacyDlpV2DeidentifyTemplate[];
    nextPageToken?: string;
}
