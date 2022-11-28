import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HybridFindingDetails } from "./googleprivacydlpv2hybridfindingdetails";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
/**
 * An individual hybrid item to inspect. Will be stored temporarily during processing.
**/
export declare class GooglePrivacyDlpV2HybridContentItem extends SpeakeasyBase {
    findingDetails?: GooglePrivacyDlpV2HybridFindingDetails;
    item?: GooglePrivacyDlpV2ContentItem;
}
