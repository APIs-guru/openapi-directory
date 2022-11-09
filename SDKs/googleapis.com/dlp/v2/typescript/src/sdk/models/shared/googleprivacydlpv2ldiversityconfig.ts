import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2LDiversityConfig
/** 
 * l-diversity metric, used for analysis of reidentification risk.
**/
export class GooglePrivacyDlpV2LDiversityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=quasiIds", elemType: shared.GooglePrivacyDlpV2FieldId })
  quasiIds?: GooglePrivacyDlpV2FieldId[];

  @Metadata({ data: "json, name=sensitiveAttribute" })
  sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
}
