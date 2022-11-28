import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";



// GooglePrivacyDlpV2EntityId
/** 
 * An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
**/
export class GooglePrivacyDlpV2EntityId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;
}
