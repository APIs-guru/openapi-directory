import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
/**
 * Request to de-identify a ContentItem.
**/
export declare class GooglePrivacyDlpV2DeidentifyContentRequest extends SpeakeasyBase {
    deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    deidentifyTemplateName?: string;
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    inspectTemplateName?: string;
    item?: GooglePrivacyDlpV2ContentItem;
    locationId?: string;
}
