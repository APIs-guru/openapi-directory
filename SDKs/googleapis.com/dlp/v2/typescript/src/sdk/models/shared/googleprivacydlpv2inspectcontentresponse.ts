import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";



// GooglePrivacyDlpV2InspectContentResponse
/** 
 * Results of inspecting an item.
**/
export class GooglePrivacyDlpV2InspectContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GooglePrivacyDlpV2InspectResult;
}
