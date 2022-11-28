import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";



// GooglePrivacyDlpV2LDiversityConfig
/** 
 * l-diversity metric, used for analysis of reidentification risk.
**/
export class GooglePrivacyDlpV2LDiversityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quasiIds", elemType: GooglePrivacyDlpV2FieldId })
  quasiIds?: GooglePrivacyDlpV2FieldId[];

  @SpeakeasyMetadata({ data: "json, name=sensitiveAttribute" })
  sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
}
