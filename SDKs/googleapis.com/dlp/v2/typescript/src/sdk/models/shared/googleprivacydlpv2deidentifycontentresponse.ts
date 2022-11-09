import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2TransformationOverview } from "./googleprivacydlpv2transformationoverview";


// GooglePrivacyDlpV2DeidentifyContentResponse
/** 
 * Results of de-identifying a ContentItem.
**/
export class GooglePrivacyDlpV2DeidentifyContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @Metadata({ data: "json, name=overview" })
  overview?: GooglePrivacyDlpV2TransformationOverview;
}
