import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2TransformationOverview } from "./googleprivacydlpv2transformationoverview";


// GooglePrivacyDlpV2ReidentifyContentResponse
/** 
 * Results of re-identifying an item.
**/
export class GooglePrivacyDlpV2ReidentifyContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @Metadata({ data: "json, name=overview" })
  overview?: GooglePrivacyDlpV2TransformationOverview;
}
