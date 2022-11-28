import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Finding } from "./googleprivacydlpv2finding";



// GooglePrivacyDlpV2InspectResult
/** 
 * All the findings for a single scanned item.
**/
export class GooglePrivacyDlpV2InspectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: GooglePrivacyDlpV2Finding })
  findings?: GooglePrivacyDlpV2Finding[];

  @SpeakeasyMetadata({ data: "json, name=findingsTruncated" })
  findingsTruncated?: boolean;
}
