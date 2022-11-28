import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplateInput } from "./googleprivacydlpv2deidentifytemplate";
/**
 * Request message for CreateDeidentifyTemplate.
**/
export declare class GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput extends SpeakeasyBase {
    deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplateInput;
    locationId?: string;
    templateId?: string;
}
