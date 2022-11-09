import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2EntityId } from "./googleprivacydlpv2entityid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2KAnonymityConfig
/** 
 * k-anonymity metric, used for analysis of reidentification risk.
**/
export class GooglePrivacyDlpV2KAnonymityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityId" })
  entityId?: GooglePrivacyDlpV2EntityId;

  @Metadata({ data: "json, name=quasiIds", elemType: shared.GooglePrivacyDlpV2FieldId })
  quasiIds?: GooglePrivacyDlpV2FieldId[];
}
