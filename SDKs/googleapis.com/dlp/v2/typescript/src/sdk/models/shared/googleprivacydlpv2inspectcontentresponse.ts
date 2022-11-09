import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";


// GooglePrivacyDlpV2InspectContentResponse
/** 
 * Results of inspecting an item.
**/
export class GooglePrivacyDlpV2InspectContentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: GooglePrivacyDlpV2InspectResult;
}
