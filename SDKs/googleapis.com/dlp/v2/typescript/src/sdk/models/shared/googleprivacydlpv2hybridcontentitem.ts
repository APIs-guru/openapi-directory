import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2HybridFindingDetails } from "./googleprivacydlpv2hybridfindingdetails";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";


// GooglePrivacyDlpV2HybridContentItem
/** 
 * An individual hybrid item to inspect. Will be stored temporarily during processing.
**/
export class GooglePrivacyDlpV2HybridContentItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingDetails" })
  findingDetails?: GooglePrivacyDlpV2HybridFindingDetails;

  @Metadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;
}
