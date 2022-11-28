import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2EntityId } from "./googleprivacydlpv2entityid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";



// GooglePrivacyDlpV2KAnonymityConfig
/** 
 * k-anonymity metric, used for analysis of reidentification risk.
**/
export class GooglePrivacyDlpV2KAnonymityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: GooglePrivacyDlpV2EntityId;

  @SpeakeasyMetadata({ data: "json, name=quasiIds", elemType: GooglePrivacyDlpV2FieldId })
  quasiIds?: GooglePrivacyDlpV2FieldId[];
}
