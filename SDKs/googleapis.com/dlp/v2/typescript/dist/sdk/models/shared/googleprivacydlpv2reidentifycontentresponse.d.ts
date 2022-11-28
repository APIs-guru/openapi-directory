import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2TransformationOverview } from "./googleprivacydlpv2transformationoverview";
/**
 * Results of re-identifying an item.
**/
export declare class GooglePrivacyDlpV2ReidentifyContentResponse extends SpeakeasyBase {
    item?: GooglePrivacyDlpV2ContentItem;
    overview?: GooglePrivacyDlpV2TransformationOverview;
}
