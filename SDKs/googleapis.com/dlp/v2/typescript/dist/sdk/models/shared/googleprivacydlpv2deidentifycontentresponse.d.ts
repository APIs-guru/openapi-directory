import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2TransformationOverview } from "./googleprivacydlpv2transformationoverview";
/**
 * Results of de-identifying a ContentItem.
**/
export declare class GooglePrivacyDlpV2DeidentifyContentResponse extends SpeakeasyBase {
    item?: GooglePrivacyDlpV2ContentItem;
    overview?: GooglePrivacyDlpV2TransformationOverview;
}
