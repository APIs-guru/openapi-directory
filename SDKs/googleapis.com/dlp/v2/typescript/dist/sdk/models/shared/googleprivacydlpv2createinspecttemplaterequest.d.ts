import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectTemplateInput } from "./googleprivacydlpv2inspecttemplate";
/**
 * Request message for CreateInspectTemplate.
**/
export declare class GooglePrivacyDlpV2CreateInspectTemplateRequestInput extends SpeakeasyBase {
    inspectTemplate?: GooglePrivacyDlpV2InspectTemplateInput;
    locationId?: string;
    templateId?: string;
}
