import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2TransformationOverview } from "./googleprivacydlpv2transformationoverview";



// GooglePrivacyDlpV2DeidentifyContentResponse
/** 
 * Results of de-identifying a ContentItem.
**/
export class GooglePrivacyDlpV2DeidentifyContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: GooglePrivacyDlpV2TransformationOverview;
}
