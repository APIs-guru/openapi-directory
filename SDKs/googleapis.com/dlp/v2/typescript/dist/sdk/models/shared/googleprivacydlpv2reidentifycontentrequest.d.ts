import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
/**
 * Request to re-identify an item.
**/
export declare class GooglePrivacyDlpV2ReidentifyContentRequest extends SpeakeasyBase {
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    inspectTemplateName?: string;
    item?: GooglePrivacyDlpV2ContentItem;
    locationId?: string;
    reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    reidentifyTemplateName?: string;
}
