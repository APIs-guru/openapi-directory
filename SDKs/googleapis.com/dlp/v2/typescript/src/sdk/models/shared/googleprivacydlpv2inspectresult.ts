import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Finding } from "./googleprivacydlpv2finding";


// GooglePrivacyDlpV2InspectResult
/** 
 * All the findings for a single scanned item.
**/
export class GooglePrivacyDlpV2InspectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.GooglePrivacyDlpV2Finding })
  findings?: GooglePrivacyDlpV2Finding[];

  @Metadata({ data: "json, name=findingsTruncated" })
  findingsTruncated?: boolean;
}
